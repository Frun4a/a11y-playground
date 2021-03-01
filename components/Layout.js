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
        <div className={styles.header}>
          <Navbar />
        </div>

        <div className={styles.content_large}>
          {children}
        </div>

        <div className={styles.content_small}>
          Content small 1
        </div>

        <div className={styles.footer}>
          Footer
        </div>
      </div>
    </>
  )
}