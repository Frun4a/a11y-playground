import Layout from "../components/Layout";
import { CardsContainer, Card } from "../components/CardsGrid/CardsContainer";
import Head from "next/head";

import ToggleButton from "../components/Buttons/Toggle Button/ToggleButton";
import { MenuButton } from "../components/Buttons/Menu Button/MenuButton";

export default function Buttons() {
  return (
    <Layout>
      <Head>
        <title>Buttons and links | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card
          title='Toggle button (uses the "aria-pressed" attribute)'
          dVoiceover='Reads "Toggle button" for the unselected button and "selected, toggle button" for the selected one.
                      When the unselected button is activated, VO reads "selected".
                      When the selected button is activated, VO does not read "unselected" (remains silent).'
        >

          <ToggleButton caption="Mute #1" pressed={false} icon={true} />
          <ToggleButton caption="Filters" pressed={true} icon={false} />
        </Card>

        <Card
          title='Menu button'
          dVoiceover=''
        >
          <MenuButton />
        </Card>

        <Card
          title="Button inside of a heading"
          dVoiceover="This text was modified by a contributor <rivenfru>"
          mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
          mTalkback="Same as moWeb Voiceover -_-"
          nvda="IDK"
        >
          <h1>
            <button
              className="example_button"
              onClick={() => alert("Great, you clicked a button")}
            >
              Button text
            </button>
          </h1>
        </Card>
        <Card
          title="Link inside of a heading"
          dVoiceover="Reads all at once, works great!!!"
          mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
          mTalkback="Same as moWeb Voiceover -_-"
          nvda="IDK"
        >
          <h1>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to google
            </a>
          </h1>
        </Card>
        <Card
          title="Heading that consists of many text elements"
          dVoiceover="Reads all at once, works great!!!"
          mVoiceover="Reads all at once, then focuses all text elements - bad bad bad"
          mTalkback="Same as moWeb Voiceover -_-"
          nvda="IDK"
        >
          <h1>
            <span>This is a heading text and there is also </span>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to google
            </a>
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
  );
}
