import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { CardsContainer, Card } from "../components/CardsGrid/CardsContainer";
import Head from "next/head";

import ToggleButton from "../components/Buttons/Toggle Button/ToggleButton";
import { ReadMore } from "../components/Buttons/ReadMore/ReadMore.js";
import { MenuButton } from "../components/Buttons/Menu Button/MenuButton";

export default function Buttons() {
  const [charactersCount, setCharactersCount] = useState(200);
  const [wordsCount, setWordsCount] = useState(42);

  return (
    <Layout>
      <Head>
        <title>Buttons and links | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card title="Read More & Less (characters)">
          <div style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid gray' }}>
            <label htmlFor="characters" style={{ marginRight: "10px" }}>
              Number of characters:
            </label>
            <input
              type="number"
              id="characters"
              name="characters"
              min="1"
              max="500"
              step="1"
              value={charactersCount}
              onChange={(e) => {
                setCharactersCount(e.target.value);
              }}
            />
          </div>
          <ReadMore
            key={charactersCount}
            copy="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            length={charactersCount}
            type="characters"
          />
        </Card>

        <Card title="Read More & Less (words)">
        <div style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid gray' }}>
            <label htmlFor="words" style={{ marginRight: "10px" }}>
              Number of words:
            </label>
            <input
              type="number"
              id="words"
              name="words"
              min="1"
              max="200"
              step="1"
              value={wordsCount}
              onChange={(e) => {
                setWordsCount(e.target.value);
              }}
            />
          </div>
          <ReadMore
            key={wordsCount}
            copy="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            length={wordsCount}
            type="words"
          />
        </Card>

        <Card
          title='Toggle button (uses the "aria-pressed" attribute)'
          dVoiceover='Reads "Toggle button" for the unselected button and "selected, toggle button" for the selected one.
                      When the unselected button is activated, VO reads "selected".
                      When the selected button is activated, VO does not read "unselected" (remains silent).'
        >
          <ToggleButton caption="Mute #1" pressed={false} icon={true} />
          <ToggleButton caption="Filters" pressed={true} icon={false} />
        </Card>

        <Card title="Menu button" dVoiceover="">
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
