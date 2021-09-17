import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss"
import Prismic from "@prismicio/client"

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de msdad</time>
            <strong> Titulo do post</strong>
            <p> texto do post</p>
          </a>
          <a href="">
            <time>12 de msdad</time>
            <strong> Titulo do post</strong>
            <p> texto do post</p>
          </a>
          <a href="">
            <time>12 de msdad</time>
            <strong> Titulo do post</strong>
            <p> texto do post</p>
          </a>
        </div>
      </main>
    </>
  );
}

/* pagina estatica para consumir menos banda, por que não ira requisitar dados 
 toda hora e sim em determinado tempo */

 export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient() 

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
 }