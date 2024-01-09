import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/fund-form";

export default async function Page() {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Wallet', href: '/dashboard/wallet' },
          {
            label: 'Fund Wallet',
            href: '/dashboard/wallet/fund',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  )
}
