import styles from'./home.module.scss';
import Head from 'next/head';
import { SubscribeButton } from '../components/subscribeButton';
import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps{
  product:{
    priceID:string,
    amount:number,
  }
}

export default function Home({product}:HomeProps) {
  return (
 <> 
  <Head> <title>Home| IgNews</title> </Head> 

   <main className={styles.container}>
     <section className={styles.content}>
       <span> 👏 Hey, Welcome <br /></span> 
       <br />
    
       <h1>News about<br /> the <span className={styles.React}>React</span > World</h1>
       <br/>
       <span>Get acess to all the publications <br /> <span className={styles.ReactPrice}> for {product.amount} month</span></span>
        <br />
       <SubscribeButton buttonProps={product.priceID}/>
     </section>
     <img src="/images/avatar.svg" alt='Girl Coding'></img>
    
   </main>

 </> 

  )
  
}

export const getStaticProps:GetStaticProps = async() =>{
  const price = await stripe.prices.retrieve('price_1KK2KEH0VuSQoFzkK70wuImA',{
 
  })
  
 const product={
   priceID:price.id,
   amount: new Intl.NumberFormat('en-US',{
     style:'currency',
     currency:'USD',
   }).format(price.unit_amount/100),

 };

 return{
   props:{
    product,
   },
   revalidate: 60 * 24 * 24, //24 hours
 }

  
} 
