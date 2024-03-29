import React, { useState } from "react";
import Layout from "../components/Layout";
import { CardsContainer, Card } from "../components/CardsGrid/CardsContainer";
import CheckboxesGroup from "../components/html5/CheckboxesGroup";
import Head from "next/head";

export default function Html5() {
  const [radioButtonsvalue, setRadioButtonsvalue] = useState("email");
  const [rangeInputValue, setRangeInputValue] = useState("50");

  return (
    <Layout>
      <Head>
        <title>Forms | A11y playground</title>
      </Head>
      <CardsContainer>
        <Card title="<select> element" dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor="cars">Choose a car:</label>
          <select name="cars" id="cars" style={{ marginLeft: "10px" }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </Card>

        <Card title="Text input field" dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor="name" style={{ marginRight: "10px" }}>
            Name (4 to 8 characters):
          </label>
          <input
            type="text"
            id="name"
            name="name"
            minLength="4"
            maxLength="8"
            size="10"
            placeholder="John Doe"
          />
        </Card>

        <Card title="Number input field" dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor="number" style={{ marginRight: "10px" }}>
            Number (10-99):
          </label>
          <input
            type="number"
            id="number"
            name="number"
            min="10"
            max="99"
            placeholder="50"
            step="1"
          />
        </Card>

        <Card title="Date input field" dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor="date" style={{ marginRight: "10px" }}>
            Start date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            min="1900-01-01"
            max="2025-12-31"
          />
        </Card>

        <Card title="Search input field" dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor="search" style={{ marginRight: "10px" }}>
            Search the website:
          </label>
          <input
            type="search"
            id="search"
            name="search"
            size="30"
            placeholder="Bananas"
          />
        </Card>

        <Card
          title="File upload input field"
          dVoiceover
          mVoiceover
          mTalkback
          nvda
        >
          <label htmlFor="fileUpload" style={{ marginRight: "10px" }}>
            Upload a png or jpeg file:
          </label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept="image/png, image/jpeg"
          />
        </Card>

        <Card title="Range input field" dVoiceover mVoiceover mTalkback nvda>
          <label htmlFor="range" style={{ marginRight: "10px" }}>
            Select the value (1-99):
          </label>
          <input
            type="range"
            id="range"
            name="range"
            min="1"
            max="99"
            step="1"
            value={rangeInputValue}
            onChange={(e) => setRangeInputValue(e.target.value)}
          />
          <span style={{ marginLeft: "10px" }}>Current value: </span>
          <span>{rangeInputValue}</span>
        </Card>

        <Card title="Radio buttons group" dVoiceover mVoiceover mTalkback nvda>
          <form>
            <fieldset>
              <legend>Please select your preferred contact method:</legend>
              <div onChange={(e) => setRadioButtonsvalue(e.target.value)}>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                  defaultChecked
                />
                <label htmlFor="contactChoice1">Email</label>

                <input
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  value="phone"
                />
                <label htmlFor="contactChoice2">Phone</label>

                <input
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  value="mail"
                />
                <label htmlFor="contactChoice3">Mail</label>
              </div>
            </fieldset>
            <button
              className="example_button"
              onClick={(e) => {
                e.preventDefault();
                alert("Selected radio button - " + radioButtonsvalue);
              }}
            >
              Submit
            </button>
          </form>

          <style jsx>
            {`
              div:first-of-type {
                display: flex;
                align-items: flex-start;
                margin: 15px;
              }

              label {
                margin-right: 15px;
              }

              input {
                width: 16px;
                height: 16px;
                margin-right: 5px;
              }

              legend {
                padding: 5px 10px;
                font-size: 14px;
              }

              button {
                display: block;
                margin: 10px auto;
              }
            `}
          </style>
        </Card>

        <Card title="Checkboxes" dVoiceover mVoiceover mTalkback nvda>
          <CheckboxesGroup />
        </Card>

      </CardsContainer>
    </Layout>
  );
}
