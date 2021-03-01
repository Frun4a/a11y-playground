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
    <article class={styles.card}>
      <header class={styles.card_title}>
        <h3>{cardData.title}</h3>
      </header>
      <main class={styles.card_description}>
         Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun Lorem Ipsum dolor amet sun
      </main>
    </article>
  )
}

Card.defaultProps = {
  title: 'Title'
}