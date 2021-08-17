import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import { CardsContainer, Card } from "../components/CardsGrid/CardsContainer";
import Modal from "../components/Modal/Modal";
import Head from "next/head";
import nextId from "react-id-generator";

export default function Buttons() {
  // Buttons focus
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);
  const button4Ref = useRef(null);
  const button5Ref = useRef(null);
  // Buttons focus end

  //Paragraph focus
  const paragraphRef = useRef(null);

  return (
    <Layout>
      <Head>
        <title>Focus handling | A11y playground</title>
      </Head>

      <CardsContainer>
        <Card
          title="Buttons that shift focus to next buttons"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <div className="buttons_container">
            <button
              className="example_button"
              ref={button1Ref}
              onClick={() => button2Ref.current.focus()}
            >
              First button
            </button>
            <button
              className="example_button"
              ref={button2Ref}
              onClick={() => button3Ref.current.focus()}
            >
              Second button
            </button>
            <button
              className="example_button"
              ref={button3Ref}
              onClick={() => button4Ref.current.focus()}
            >
              Third button
            </button>
            <button
              className="example_button"
              ref={button4Ref}
              onClick={() => button5Ref.current.focus()}
            >
              Forth button
            </button>
            <button
              className="example_button"
              ref={button5Ref}
              onClick={() => button1Ref.current.focus()}
            >
              Fifth button
            </button>
          </div>
          <style jsx>
            {`
              .buttons_container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
          </style>
        </Card>

        <Card
          title="Shift screenreader focus to the paragraph of text"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <button
            className="example_button"
            onClick={() => paragraphRef.current.focus()}
          >
            Shift focus
          </button>
          <button
            className="example_button"
            onClick={() => setTimeout(() => paragraphRef.current.focus(), 5000)}
          >
            Wait 5 seconds and shift focus
          </button>
          <p ref={paragraphRef} tabIndex="-1" style={{ outline: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Card>

        <Card title="Modal Dialog" dVoiceover mVoiceover mTalkback nvda>
          <Modal title="The modal title">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </Modal>
        </Card>
      </CardsContainer>
    </Layout>
  );
}
