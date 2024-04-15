import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Level Money</title>
      </Head>
      <div className="wrapper mx-auto p-4 pb-2">
        <h2 className="text-3xl font-bold">Account Overview</h2>
        <p className="text-sm pt-2">This is how your money is doing</p>
        <hr className="mt-4" />
      </div>
      <div className="bg-darkgrey rounded-lg flex items-center justify-between p-4 m-4">
        <span className="text-[#C6C6C6] text-xl uppercase">Monthly Budget</span>
        <span className="text-[#C6C6C6] text-xl font-semibold">
          ${process.env.NEXT_PUBLIC_SPEND_INCOME}
        </span>
      </div>
      <div className="bg-darkgrey rounded-lg flex items-center justify-between p-4 m-4">
        <span className="text-[#C6C6C6] text-xl uppercase">Special Budget</span>
        <span className="text-[#C6C6C6] text-xl font-semibold">
          ${process.env.NEXT_PUBLIC_SPECIAL_INCOME}
        </span>
      </div>
    </>
  );
}
