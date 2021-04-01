import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import { CardsContainer, Card } from '../components/CardsGrid/CardsContainer'
import CheckboxesGroup from '../components/html5/CheckboxesGroup'
import Head from 'next/head'

export default function Html5() {

  const [radioButtonsvalue, setRadioButtonsvalue] = useState("email")

  return (
    <Layout>
      <Head>
        <title>HTML5 | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card
          title='Unordered list (<ul> with <li>)'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
            <ul style={{paddingLeft: "30px"}}>
              <li>List item one</li>
              <li>List item two</li>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>List item two dot one</li>
                  <li>List item two dot two</li>
                </ul>
              <li>List item three</li>
              <li>List item four</li>
              <li>List item five</li>
            </ul>
        </Card>

        <Card
          title='Ordered list (<ol> with <li>)'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
            <ol style={{paddingLeft: "30px"}}>
              <li>List item one</li>
              <li>List item two</li>
                <ol style={{ paddingLeft: "20px" }}>
                  <li>List item two dot one</li>
                  <li>List item two dot two</li>
                </ol>
              <li>List item three</li>
              <li>List item four</li>
              <li>List item five</li>
            </ol>
        </Card>

        <Card
          title='<select> element'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars" style={{ marginLeft: "10px" }}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
        </Card>

        <Card
          title='Radio buttons group'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <form>
            <fieldset>
              <legend>Please select your preferred contact method:</legend>
              <div onChange={(e) => setRadioButtonsvalue(e.target.value)}>
                <input type="radio" id="contactChoice1" name="contact" value="email" defaultChecked />
                  <label htmlFor="contactChoice1">Email</label>

                <input type="radio" id="contactChoice2" name="contact" value="phone" />
                  <label htmlFor="contactChoice2">Phone</label>

                <input type="radio" id="contactChoice3" name="contact" value="mail" />
                  <label htmlFor="contactChoice3">Mail</label>
              </div>
              <div>
                <button className="example_button" onClick={(e) => { e.preventDefault(); alert('Selected radio button - ' + radioButtonsvalue)}}>Submit</button>
              </div>
            </fieldset>
          </form>

          <style jsx>{`
            div:first-of-type {
              display: flex;
              align-items: flex-start;
              margin: 15px;
            }
            
            label {
              margin-right: 15px;
            }
            
            input {
              width: 16px;
              height: 16px;
              margin-right: 5px;
            }
            
            button,
            legend {
              padding: 5px 10px;
              font-size: 14px;
            }

            button {
              display: block;
              margin: 10px auto;
            }
          
          `}
          </style>
        </Card>

        <Card
          title='Checkboxes'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <CheckboxesGroup />
        </Card>

        <Card
          title='<figure> and <figcaption>'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <figure>
            <img src="/elephant-660-480.jpg"
              alt="Elephant at sunset"
            />
            <figcaption>An elephant at sunset</figcaption>
          </figure>
          
          <style jsx>{`
            figure {
              border: thin #c0c0c0 solid;
              display: flex;
              flex-flow: column;
              padding: 5px;
              max-width: 220px;
              margin: auto;
            }

            img {
              max-width: 220px;
              max-height: 150px;
            }

            figcaption {
              background-color: #222;
              color: #fff;
              font: italic smaller sans-serif;
              padding: 3px;
              text-align: center;
            }
          `}</style>

        </Card>

        <Card
          title='<hr> element (thematic break between paragraph-level elements)'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <p>Some text before</p>
          <hr />
          <p>Some text after</p>
        </Card>

        <Card
          title='<iframe> element with a title property'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <iframe 
            style = { { maxWidth: "200px" } }
            src="/iframe"
            title="iFrame with a title"
          >
          </iframe>
        </Card>

        <Card
          title='<iframe> element with an aria-label property'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <iframe
            style = { { maxWidth: "200px" } }
            src="/iframe"
            aria-label="iFrame with an aria-label"
          >
          </iframe>
        </Card>

      </CardsContainer>
    </Layout>
  )
}

