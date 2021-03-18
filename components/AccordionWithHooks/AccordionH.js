import React, { useState, useRef } from 'react'
import nextId from'react-id-generator'
import Chevron from './Chevron'
import styles from './AccordionH.module.css'

function AccordionH(props) {
  
  const [setActive, setActiveState] = useState("")
  //const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("")
  const [setDisplayCss, setDisplayCssState] = useState(styles.display_none)
  const [setAriaExpanded, setAriaExpandedState] = useState("false")

  const content = useRef(null)
  const buttonId = nextId();
  const contentSectionId = nextId();

  function toggleAccordion() {
    setActiveState(setActive === "" ? styles.active : "")

    // setHeightState(
    //   setActive === styles.active ? '0px' : `${content.current.scrollHeight}px`
    // )

    setRotateState(setActive === styles.active ? "" : styles.rotate)

    setDisplayCssState(setActive === styles.active ? styles.display_none : "")

    setAriaExpandedState(setActive === styles.active ? "false" : "true")
  }

  return (
    <div className={styles.accordion_section} style={{ position: "relative"}}>
      <button 
        className={`${styles.accordion} ${setActive}`}
        onClick={toggleAccordion}
        aria-expanded={setAriaExpanded}
        aria-controls={contentSectionId}
        id={buttonId}
      >
        <p className={styles.accordion_title}>How screen readers behave with <u>{props.title}</u></p>
        <Chevron className={`${styles.accordion_icon} ${setRotate}`} width={10} fill="#777" />
      </button>
      <div>
        <div 
          ref={content}
          className={`${styles.accordion_content} ${setDisplayCss}`}
          id={contentSectionId}
          role="group"
          aria-labelledby={buttonId}
          //style={{ maxHeight: setHeight }}
        >
          <div
            className={styles.accordion_text}
            //dangerouslySetInnerHTML={{ __html: props.content }}
          >
            <p><strong>Desktop VoiceOver: </strong>{props.dVoiceover}</p>
            <p><strong>moWeb VoiceOver: </strong>{props.mVoiceover}</p>
            <p><strong>moWeb Talkback: </strong>{props.mTalkback}</p>
            <p><strong>NVDA: </strong>{props.nvda}</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default AccordionH