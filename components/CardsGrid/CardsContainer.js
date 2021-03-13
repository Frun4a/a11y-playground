import styles from './CardsContainer.module.css'
import AccordionH from '../AccordionWithHooks/AccordionH'

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
      <main 
        className={styles.card_description}
      >
        {props.children}
      </main>
      <AccordionH
          title={props.title}
          dVoiceover={props.dVoiceover}
          mVoiceover={props.mVoiceover}
          mTalkback={props.mTalkback}
          nvda={props.nvda}
        />
    </article>
  )
}