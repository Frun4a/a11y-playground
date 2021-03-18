import styles from './CardsContainer.module.css'
import nextId from'react-id-generator'
import AccordionH from '../AccordionWithHooks/AccordionH'

export function CardsContainer( {children} ) {
  return (
  <section className={styles.cards_container}>
      {children}
  </section>
  )
}


export function Card(props) {

  const cardHeadingID = nextId()

  return (
    <article
      className={`${styles.card} ${props.spans_2 ? styles.card_spans_2 : ""}`}
      aria-labelledby={cardHeadingID}
    >
      <div className={styles.card_title}>
        <h3 id={cardHeadingID}>{props.title}</h3>
      </div>
      <div 
        className={styles.card_description}
        role="group"
        aria-label="Example area"
      >
        {props.children}
      </div>
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