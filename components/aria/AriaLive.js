
import React from 'react'
import nextId from'react-id-generator'
import styles from './AriaLive.module.css'

class AriaLive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAreaText: "Default text",
      liveRegionText: "Some text",
      ['ariaLive' + this.formId]: 'polite',
      ariaAtomic: this.props.ariaAtomic
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  textId = nextId()
  formId = nextId()

  handleInputChange(event) {
    const target = event.target
    const name = event.target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div key={this.formId}>
        <div className={styles.container}>
          
          <div className={styles.left_column} onChange={this.handleInputChange}>
            <fieldset className={styles.fieldset}>
              <legend>Aria-live attribute value:</legend>
              <div className={styles.radiobuttons_container}>
                <div>
                  <input type="radio" id={"arialiveChoice1" + this.formId} name={"ariaLive" + this.formId} value="off" />
                  <label htmlFor={"arialiveChoice1" + this.formId}>Off</label>
                </div>
                <div>
                  <input type="radio" id={"arialiveChoice2" + this.formId} name={"ariaLive" + this.formId} value="polite" defaultChecked/>
                  <label htmlFor={"arialiveChoice2" + this.formId}>Polite</label>
                </div>
                <div>
                  <input type="radio" id={"arialiveChoice3" + this.formId} name={"ariaLive" + this.formId} value="assertive" />
                  <label htmlFor={"arialiveChoice3" + this.formId}>Assertive</label>
                </div>
              </div>
            </fieldset>
            <fieldset className={styles.fieldset} disabled={true}>
              <legend>Aria-atomic attribute (enabled when checked)</legend>
              <div className={styles.radiobuttons_container}>
                <div>
                  <input type="checkbox" id={"ariaAtomic" + this.formId} name="ariaAtomic" checked={this.state.ariaAtomic} readOnly />
                  <label htmlFor={"ariaAtomic" + this.formId}>Aria-atomic</label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className={styles.right_column}>
            <label htmlFor={this.textId} className={styles.label}>Text to announce:</label>
            <textarea
              id={this.textId}
              className={styles.text_area}
              name={'textAreaText'}
              rows="5"
              cols="33"
              onChange={this.handleInputChange}
              value={this.state.textAreaText}
            >
            </textarea>
            <button
              className="example_button"
              onClick={() => this.setState({liveRegionText: this.state.textAreaText})}
            >
              Update text
            </button>
            <button
              className="example_button"
              onClick={() => setTimeout(() => this.setState({liveRegionText: this.state.textAreaText}), 5000)}
            >
              Update text in 5 seconds
            </button>
          </div>

        </div>
        <div
          aria-live={this.state['ariaLive' + this.formId]}
          aria-atomic={this.state.ariaAtomic}
          className={styles.live_region}  
        >
          {this.state.liveRegionText}
        </div>
      </div>
    )
  }
}

export default AriaLive