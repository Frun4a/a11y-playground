import Layout from '../components/Layout'
import { CardsContainer, Card } from '../components/CardsGrid/CardsContainer'
import AccordionH from '../components/AccordionWithHooks/AccordionH'

export default function Buttons() {
  return (
    <Layout>
      <CardsContainer>
        <Card cardData='Test123'>
          <AccordionH
          title="Links with many elements inside of them"
          dVoiceover="Reads all at once, works great"
          mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
          mTalkback="Same as moWeb Voiceover"
          NVDA
        />
      </Card>
        <Card cardData={{title: 'Test2'}}/>
        <Card cardData={{title: 'Test3'}}/>
        <Card cardData={{title: 'Test4'}}/>
      </CardsContainer>
      
      <style jsx>{`
        .test {
          margin-top: 50px;
        }
      `}</style>
    </Layout>
  )
}

