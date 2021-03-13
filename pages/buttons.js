import Layout from '../components/Layout'
import { CardsContainer, Card } from '../components/CardsGrid/CardsContainer'

export default function Buttons() {
  return (
    <Layout>
      <CardsContainer>
        <Card 
          title='Button inside of a heading'
          dVoiceover="Reads all at once, works great!!!"
          mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
          mTalkback="Same as moWeb Voiceover -_-"
          nvda="IDK"
        >
            <h1>
              <button>Button text</button>
            </h1>
        </Card>
        <Card 
            title='Link inside of a heading'
            dVoiceover="Reads all at once, works great!!!"
            mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
            mTalkback="Same as moWeb Voiceover -_-"
            nvda="IDK"
          >
            <h1>
              <a href="https://www.google.com/">Link to google</a>
            </h1>
        </Card>
        <Card 
            title='Heading that consists of many text elements'
            dVoiceover="Reads all at once, works great!!!"
            mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
            mTalkback="Same as moWeb Voiceover -_-"
            nvda="IDK"
          >
            <h1>
              <span>This is a heading text and there is also </span>
              <a href="https://www.google.com/">Link to google</a>
              <span> and some more text</span>
              <p>There is even a new paragraph</p>
            </h1>
        </Card>
      </CardsContainer>
      
      <style jsx>{`
        .test {
          margin-top: 50px;
        }
      `}</style>
    </Layout>
  )
}

