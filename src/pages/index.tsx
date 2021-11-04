import Head from "next/head"
import {GetStaticProps} from "next"
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

/*
  Client-side -> usaremos quando nao precisamos de indexação, quando é carregadas
  por uma ação do cliente e não necessariamente quando carrega a página, 

  SSR - Server Side Rendering -> usadas para ser mais dinamico em páginas que
  vão usufruir de dados do usuarios da API em tempo real. E renderiza sempre que
  houver mudanças de dados.
  exemplos: 

  SSG - Static Site Generation -> usadas em páginas que o conteúdo é igual para 
  todos os usuarios, por que gera o HTML igual em determinado tempo para todos.
  exemplos: Home de um blog, post do blog, pagina de um produto em ecommerce
*/

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JZLcjEUlQypP44xNuQ6XYqy') // pega somente um

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}