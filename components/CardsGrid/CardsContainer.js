import styles from './CardsContainer.module.css'

export function CardsContainer( {children} ) {
  return (
  <section className={styles.cards_container}>
      {children}
  </section>
  )
}


export function Card( {cardData} ) {

  return (
    <article className={styles.card}>
      <header className={styles.card_title}>
        <h3>{cardData.title}</h3>
      </header>
      <main className={styles.card_description}>
         Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
      </main>
    </article>
  )
}

Card.defaultProps = {
  title: 'Title'
}