import React, { useState, useRef } from 'react'
import Chevron from './Chevron'
import styles from './AccordionH.module.css'

function AccordionH(props) {
  
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? styles.active : "")
    //console.log(content.current.scrollHeight)

    setHeightState(
      setActive === styles.active ? '0px' : `${content.current.scrollHeight}px`
    )

    setRotateState(setActive === styles.active ? "" : styles.rotate)
  }

  return (
    <div className={styles.accordion_section}>
      <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
        <p className={styles.accordion_title}>{props.title}</p>
        <Chevron className={`${styles.accordion_icon} ${setRotate}`} width={10} fill="#777" />
      </button>

      <div 
        ref={content}
        className={styles.accordion_content}
        style={{ maxHeight: setHeight }}
      >

        <div
          className={styles.accordion_text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />  
      </div>
    </div>
  )
}

export default AccordionH