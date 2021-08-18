import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import { CardsContainer, Card } from "../components/CardsGrid/CardsContainer";
import AriaLive from "../components/aria/AriaLive";
import Head from "next/head";
import nextId from "react-id-generator";

export default function Buttons() {
  const alertId = nextId();
  const [alertText, setAlertText] = useState("Example alert text");
  const [alertDivText, setAlertDivText] = useState("");

  function handleChange(event) {
    setAlertText(event.target.value);
  }

  return (
    <Layout>
      <Head>
        <title>ARIA | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card title='Role = "Alert"' dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor={alertId}>Alert text:</label>
          <textarea
            id={alertId}
            name={"Alert_text_area" + alertId}
            rows="5"
            cols="33"
            onChange={handleChange}
            value={alertText}
          ></textarea>
          <button
            className="example_button"
            onClick={() => setAlertDivText(alertText)}
          >
            Trigger an alert
          </button>
          <div role="alert">{alertDivText}</div>

          <style jsx>{`
            textarea {
              padding: 10px;
              line-height: 1.5;
              border-radius: 5px;
              border: 1px solid #ccc;
              box-shadow: 1px 1px 1px #999;
              min-width: 100px;
              min-height: 95px;
              width: 100%;
            }

            label {
              display: block;
              margin-bottom: 10px;
            }
            [role="alert"] {
              padding: 10px;
              border: 1px solid hsl(206, 74%, 54%);
              border-radius: 5px;
              background: hsl(206, 74%, 95%);
            }
            [role="alert"]:empty {
              display: none;
            }
          `}</style>
        </Card>

        <Card
          title='Aria-live with Aria-atomic="false"'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <AriaLive ariaAtomic={false} />
        </Card>

        <Card
          title='Aria-live with Aria-atomic="true"'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <AriaLive ariaAtomic={true} />
        </Card>

        <Card
          title='Aria-hidden="false" inside of aria-hidden="true"'
          dVoiceover="This is not working. The aria-hidden='false' container's content is not exposed to AT."
          mVoiceover
          mTalkback
          nvda
        >
          <p>
            Content of the next container is hidden from screen readers using
            the aria-hidden="true" attribute.
          </p>
          <div aria-hidden="true" aria-label="hidden content">
            Ipsum copy
            <div aria-hidden="false" aria-label="exposed content">
              Content of this container is probably exposed to screen readers
              using the aria-hidden="false" attribute.
            </div>
            Test
          </div>

          <style jsx>
            {`
              div {
                border: 2px solid #505050;
                padding: 10px;
                margin: 5px;
              }
            `}
          </style>
        </Card>
      </CardsContainer>
    </Layout>
  );
}
