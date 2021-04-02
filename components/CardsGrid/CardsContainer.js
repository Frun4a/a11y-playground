import styles from './CardsContainer.module.css'
import nextId from'react-id-generator'
import AccordionH from '../AccordionWithHooks/AccordionH'
import TitleToId from '../TitleToId'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export function CardsContainer( {children} ) {
  return (
  <section className={styles.cards_container}>
      {children}
  </section>
  )
}


export function Card(props) {

  const cardHeadingID = nextId()
  const cardId = TitleToId(props.title)

  return (
    <article
      className={`${styles.card} ${props.spans_2 ? styles.card_spans_2 : ""}`}
      aria-labelledby={cardHeadingID}
      id={cardId}
    >
      <div className={styles.card_title}>
        <h3 id={cardHeadingID} className={styles.card_heading}>{props.title}</h3>
        <div className={styles.link_icon_block}>
          <a
            href={`#${cardId}`}
            title="Right click to copy the link to the card"
            aria-label={`"${props.title}" card`}
          >
            <FontAwesomeIcon icon={faLink}/>
          </a>
        </div>

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