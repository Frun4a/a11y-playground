import Layout from '../components/Layout'
import AccordionH from '../components/AccordionWithHooks/AccordionH'

export default function Accordion() {
  return (
    <Layout>
      <AccordionH
        title="Links with many elements inside of them"
        dVoiceover="Reads all at once, works great"
        mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
        mTalkback="Same as moWeb Voiceover"
        NVDA
      />

      <AccordionH
        title="Which languages does you support?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionH
        title="Can I use a custom domain?"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
      />
    </Layout>
  )
}

