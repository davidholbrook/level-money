import React from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Level Money</title>
      </Head>
      <div className="wrapper mx-auto">
        <h2 className="text-3xl font-bold">Account Overview</h2>
        <p className="text-sm pt-2">This is how your money is doing</p>
      </div>
    </>
  )
}
