import { Card } from '@/app/ui/dashboard/cards';
import { hind } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
import { fetchActiveUser, fetchWalletById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { FundWallet, Transfer } from '@/app/ui/invoices/buttons';

export default async function Page() {
  const activeUserID = await fetchActiveUser();

  const walletBalance = await fetchWalletById(activeUserID.active_id);

  if (!walletBalance) {
    notFound();
  }

  return (
    <>
      <h1 className={`${hind.className} mb-4 text-xl md:text-2xl`}>
          Wallet
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <Card title="Wallet balance" value={walletBalance.amount} type="collected"/>
          <div className="mt-4 flex sm:flex-col items-center justify-between md:mt-8">
            <FundWallet title="Fund Wallet" />
            <Transfer title="Transfer" />
          </div>
        </Suspense>
      </div>
    </>
  )
}
