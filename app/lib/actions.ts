'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[]
  };
  message?: string | null;
}

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than ₦0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.'
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }
  
  const { customerId, amount, status } = validatedFields.data;
  console.log(customerId);
  const date = new Date().toISOString().split('T')[0];
  
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amount}, ${status}, ${date})
    `;
  } catch (error) {
    // Return a more specific error if database error occurs
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}


const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amount}, status = ${status}
      WHERE id = ${id}
    `;
  } catch(error) {
    return {
      message: 'Databse Error: failed to Update Invoice.'
    }
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  } catch(error) {
    return {
      message: 'Database Error: failed to Delete Invoice.'
    }
  }
}

const Transfer = FormSchema.omit({ id: true, status: true, date: true });

export async function transferFunds(prevState: State, formData: FormData) {
  const validatedFields = Transfer.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Make Transfer'
    }
  }

  const { customerId, amount } = validatedFields.data;
  // const date = new Date().toISOString().split('T')[0];

  try {
    const updateRecipientPromise = sql`
      UPDATE wallets
      SET amount = amount + ${amount}
      WHERE wallets.id = ${customerId}
    `;

    const updateSenderPromise = sql`
      UPDATE wallets
      SET amount = amount - ${amount}
      FROM activeUser
      WHERE wallets.customer_id = activeUser.active_id
    `;

    // const editDatePromise = sql`
    //   INSERT INTO wallets (date)
    //   VALUES (${date})
    // `;

    const data = await Promise.all([
      updateRecipientPromise,
      updateSenderPromise,
      // editDatePromise
    ]);

  } catch(error) {
    return {
      message: 'Database Error: Failed to Make Transfer'
    }
  }

  revalidatePath('/dashboard/wallet');
  redirect('/dashboard/wallet');
}

const Fund = FormSchema.omit({ id: true, customerId: true, status: true, date: true })
export async function fundWallet(prevState: State, formData: FormData) {
  const validatedFields = Fund.safeParse({
    amount: formData.get('amount'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Fund Wallet'
    }
  }

  const { amount } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  try {
    const updateBalancePromise = sql`
      UPDATE wallets
      SET amount = wallets.amount + ${amount}
      FROM activeuser
      WHERE wallets.customer_id = activeuser.active_id
    `;

    // const editDatePromise = sql`
    //   INSERT INTO wallets (date)
    //   VALUES (${date})
    // `;

    const data = await Promise.all([
      updateBalancePromise,
      // editDatePromise,
    ]);

  } catch(error) {
    return {
      message: 'Database Error: Failed to Fund Wallet'
    }
  }

  revalidatePath('/dashboard/wallet');
  redirect('/dashboard/wallet');
}
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {

  async function updateActiveUser() {
    const email = formData.get('email');
    // console.log(email);

    try {
      await sql`
        UPDATE activeuser
        SET active_id = customers.id,
            name = customers.name,
            email = customers.email,
            image_url = customers.image_url
        FROM customers
        WHERE customers.email = ${String(email)}
      `;
    } catch(error) {
      return {
        message: 'Databse Error: Failed to Update Active User'
      }
    }
  }
  

  try {
    const updateActiveUserPromise = updateActiveUser;
    const signInPromise = signIn('credentials', formData);

    const data = await Promise.all([
      updateActiveUserPromise(),
      signInPromise,
    ]);

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
