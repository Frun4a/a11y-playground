import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import { CardsContainer, Card } from "../components/CardsGrid/CardsContainer";
import Head from "next/head";

export default function Html5() {
  return (
    <Layout>
      <Head>
        <title>HTML5 | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card
          title="Unordered list (<ul> with <li>)"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <ul style={{ paddingLeft: "30px" }}>
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
          title="Ordered list (<ol> with <li>)"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <ol style={{ paddingLeft: "30px" }}>
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

        <Card title="Table" dVoiceover mVoiceover mTalkback nvda>
          <table>
            <caption>Example table</caption>
            <tr>
              <td></td>
              <th scope="col">Column 2</th>
              <th scope="col">Column 3</th>
              <th scope="col">Column 4</th>
            </tr>
            <tr>
              <th scope="row">Row 2</th>
              <td>Some text</td>
              <td>Text value</td>
              <td>More text</td>
            </tr>
            <tr>
              <th scope="row">Row 3</th>
              <td>Some text</td>
              <td>Text value</td>
              <td rowSpan="2">Cell spans 2 rows</td>
            </tr>
            <tr>
              <th scope="row">Row 4</th>
              <td>Some text</td>
              <td>Text value</td>
            </tr>
            <tr>
              <th scope="row">Row 5</th>
              <td>Some text</td>
              <td colSpan="2">Cell spans 2 columns</td>
            </tr>
          </table>

          <style jsx>
            {`
              caption {
                padding: 10px;
                caption-side: bottom;
              }

              table {
                border-collapse: collapse;
                border: 2px solid rgb(200, 200, 200);
                letter-spacing: 1px;
              }

              td,
              th {
                border: 1px solid rgb(190, 190, 190);
                padding: 7px 15px;
              }

              th {
                background-color: rgb(235, 235, 235);
              }

              td {
                text-align: center;
              }
            `}
          </style>
        </Card>

        <Card
          title="<figure> and <figcaption>"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <figure>
            <img src="/elephant-660-480.jpg" alt="Elephant at sunset" />
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
          title="<hr> element (thematic break between paragraph-level elements)"
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
          title="<iframe> element with a title property"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <iframe
            style={{ maxWidth: "200px" }}
            src="/iframe"
            title="iFrame with a title"
          ></iframe>
        </Card>

        <Card
          title="<iframe> element with an aria-label property"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <iframe
            style={{ maxWidth: "200px" }}
            src="/iframe"
            aria-label="iFrame with an aria-label"
          ></iframe>
        </Card>
      </CardsContainer>
    </Layout>
  );
}
