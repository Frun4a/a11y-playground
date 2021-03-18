import styles from './Layout.module.css'
import Navbar from './Navbar/Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
      <title>A11y playground | Just for fun</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <Navbar />
        </header>

        <main className={styles.content_large}>
          {children}
        </main>

        <aside className={styles.content_small}>
          I might put something useful here. In-page links probably?
        </aside>

        <footer className={styles.footer}>
          <i>This is a Footer. Not much to say. This is a self-education project.</i>
        </footer>
      </div>
    </>
  )
}