import { Header } from "./components/Header/page";
import { SubscribeButton } from "./components/SubscribeButton/page";
import styles from './home.module.scss'
import { stripe } from "./services/stripe";


export default async function Home() {
  const stripe = require('stripe') ('sk_test_51NO61TGl9kA9zGAJkKmHT02iyawXlmoNzXMmhiJIabxmivd1ty6VMShdfstfFApGDLAjmrpqD0ldovSTRFoChHo100LuXnA9lM')

  const price = await stripe.prices.retrieve('price_1NO6FgGl9kA9zGAJPLMmJ15W' )

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  
  return (
    <>
    <Header />

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acces to all the publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>

      <img src="/images/Mulher.png" alt="Girl coding" />
    </main>
    </>
  )
}
