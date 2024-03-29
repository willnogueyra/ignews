import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss"
import Prismic from "@prismicio/client"
import { RichText } from "prismic-dom"
import Link from "next/link"

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            // eslint-disable-next-line react/jsx-key
            <Link key={post.slug} href={`/posts/${post.slug}`}> 
            <a href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
            </Link>
          ))}
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

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '', // encontrar
      // conteudo que o tipo é paragrafo se for texto, se nao, nulo
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })

  return {
    props: {posts}
  }
 }