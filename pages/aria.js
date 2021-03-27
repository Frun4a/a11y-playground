import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import { CardsContainer, Card } from '../components/CardsGrid/CardsContainer'
import Head from 'next/head'
import nextId from'react-id-generator'

export default function Buttons() {

  const alertId = nextId()
  const [alertText, setAlertText] = useState("Example alert text")
  const [alertDivText, setAlertDivText] = useState("")

  function handleChange(event) {
    setAlertText(event.target.value);
  }

  return (
    <Layout>
      <Head>
        <title>ARIA | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card
          title='Role = "Alert"'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <label htmlFor={alertId}>Alert text:</label>
          <textarea
            id={alertId}
            name={'Alert_text_area' + alertId}
            rows="5"
            cols="33"
            onChange={handleChange}
            value={alertText}
          >
          </textarea>
          <button
            className="example_button"
            onClick={() => setAlertDivText(alertText)}
          >
            Trigger an alert
          </button>
          <div role="alert">{alertDivText}</div>


          <style jsx>{`
            label,
            textarea {
                font-size: .8rem;
                letter-spacing: 1px;
            }

            textarea {
                padding: 10px;
                line-height: 1.5;
                border-radius: 5px;
                border: 1px solid #ccc;
                box-shadow: 1px 1px 1px #999;
            }
            
            label {
                display: block;
                margin-bottom: 10px;
            }
            [role="alert"] {
              padding: 10px;
              border: 2px solid hsl(206, 74%, 54%);
              border-radius: 4px;
              background: hsl(206, 74%, 90%);
            }
            [role="alert"]:empty {
              display: none;
            }
          `}</style>
        </Card>

      </CardsContainer>
    </Layout>
  )
}

