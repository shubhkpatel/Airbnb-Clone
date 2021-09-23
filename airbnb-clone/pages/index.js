import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
      </Head>

      <Header />

      <Banner />
    </div>
  )
}