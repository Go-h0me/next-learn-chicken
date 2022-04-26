//Option 1: fetch products on the server side (in getStaticProps)

import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import Head from 'next/head'
import Title from '../components/Title'


export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
 const response = await fetch('http://localhost:1337/api/products')
const products = await responseSymbol.json();
  return {props:{products}}
}

function HomePage({products}) {
  console.log('[HomePage] render:', products);
  return (
    <>
      <Head>
        <title>Next Shop Gohome</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop Gohome</Title>
        <ul>
          {products.map((product) =>
            <li key={product.id}>{product.title}</li>

          )}
        </ul>
      </main>
    </>
  )
}
export default HomePage