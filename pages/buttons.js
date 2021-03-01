import Layout from '../components/Layout'
import { CardsContainer, Card } from '../components/CardsGrid/CardsContainer'

export default function Buttons() {
  return (
    <Layout>
      <CardsContainer>
        <Card cardData={{title: 'Test'}}/>
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

