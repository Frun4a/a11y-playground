import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from './index.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.top_container}>
        <div className={styles.inner_container}>
          <div className={styles.logoimage_container}>
            <img 
              src="/in_progress.jpg"
              alt="The image of a tower crane" />
          </div>
          <div className={styles.indexTextContainer}>
            <div className={styles.indexText}>
              The website is WIP.
              <br />
              This is the place where I am learning React, Next.js and a11y.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
