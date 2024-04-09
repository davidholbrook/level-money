import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/layout'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Level Money</title>
      </Head>
      <h2>Account Overview</h2>
      <p>This is how your money is doing</p>
    </Layout>
  )
}
