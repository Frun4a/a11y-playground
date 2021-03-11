import styles from './CardsContainer.module.css'

export function CardsContainer( {children} ) {
  return (
  <section className={styles.cards_container}>
      {children}
  </section>
  )
}


export function Card(props) {

  return (
    <article className={styles.card}>
      <header className={styles.card_title}>
        <h3>{props.title}</h3>
      </header>
      <main className={styles.card_description}>
         Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
      </main>
      {props.children}
    </article>
  )
}