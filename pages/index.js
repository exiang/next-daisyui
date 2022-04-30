import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.description}>
          <h2 className={styles.subtitle}>Demo</h2>
          <ol>
            <li><Link href="/tailwindcss"><a>Tailwind CSS</a></Link></li>
            <li><Link href="/daisyui"><a>DaisyUI</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/getQuery"><a>GET Query (URL Prop)</a></Link></li>
            <li><Link href="/onclick"><a>Navigate programatically with router</a></Link></li>
            <li><Link href="/404NotExists"><a>404 Customized</a></Link></li>
            <li><Link href="/blog"><a>Blog (Nested Page Route)</a></Link></li>
            <li><Link href="/category"><a>Category (Dynamic Page Route)</a></Link></li>
            <li><Link href="/product"><a>Product (Nexted Dynamic Page Route)</a></Link></li>
            <li><Link href="/docx"><a>Docx (Freeform Dynamic Page Route)</a></Link></li>
            <li><Link href="/ssg"><a>SSG (Static Site Generation)</a></Link></li>
            <li><Link href="/post"><a>SSG with Fallback</a></Link></li>
            <li><Link href="/isr"><a>ISR (Incremental Static Regeneration)</a></Link></li>
            <li><Link href="/ssr"><a>SSR (Server Side Rendering)</a></Link></li>
            <li><Link href="/gallery"><a>Gallery (Client Side Rendering, Axios, env &amp; API)</a></Link></li>
            <li><Link href="/uploadImage"><a>Upload Image</a></Link></li>
            Hello BS
          </ol>
        </div>
      

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
