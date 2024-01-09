import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import Form from "@/app/ui/invoices/transfer-form";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Wallet', href: '/dashboard/wallet' },
          {
            label: 'Transfer',
            href: '/dashboard/wallet/transfer',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}
