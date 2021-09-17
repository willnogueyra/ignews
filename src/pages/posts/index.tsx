import Head from "next/head";
import styles from "./styles.module.scss"

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