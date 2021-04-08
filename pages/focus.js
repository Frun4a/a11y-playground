import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import { CardsContainer, Card } from '../components/CardsGrid/CardsContainer'
import Head from 'next/head'
import nextId from'react-id-generator'

export default function Buttons() {

  // Buttons focus
  const button1Ref = useRef(null)
  const button2Ref = useRef(null)
  const button3Ref = useRef(null)
  const button4Ref = useRef(null)
  const button5Ref = useRef(null)
// Buttons focus end

  return (
    <Layout>
      <Head>
        <title>Focus handling | A11y playground</title>
      </Head>

      <CardsContainer>
        
        <Card
          title='Buttons that shift focus to next buttons'
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <div className="buttons_container">
            <button className="example_button" ref={button1Ref} onClick={() => button2Ref.current.focus()}>
              First button
            </button>
            <button className="example_button" ref={button2Ref} onClick={() => button3Ref.current.focus()}>
              Second button
            </button>
            <button className="example_button" ref={button3Ref} onClick={() => button4Ref.current.focus()}>
              Third button
            </button>
            <button className="example_button" ref={button4Ref} onClick={() => button5Ref.current.focus()}>
              Forth button
            </button>
            <button className="example_button" ref={button5Ref} onClick={() => button1Ref.current.focus()}>
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

      </CardsContainer>
    </Layout>
  )
}

