
import React from 'react'
import nextId from'react-id-generator'
import styles from './AriaLive.module.css'

class AriaLive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAreaText: "Default text",
      liveRegionText: "Some text",
      ariaLive: 'off',
      ariaAtomic: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  textId = nextId()

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
      <>
        <div className={styles.container}>
          
          <div className={styles.left_column} onChange={this.handleInputChange}>
            <fieldset className={styles.fieldset}>
              <legend>Aria-live attribute value:</legend>
              <div className={styles.radiobuttons_container}>
                <div>
                  <input type="radio" id="arialiveChoice1" name="ariaLive" value="off" defaultChecked />
                  <label htmlFor="arialiveChoice1">Off</label>
                </div>
                <div>
                  <input type="radio" id="arialiveChoice2" name="ariaLive" value="polite" />
                  <label htmlFor="arialiveChoice2">Polite</label>
                </div>
                <div>
                  <input type="radio" id="arialiveChoice3" name="ariaLive" value="assertive" />
                  <label htmlFor="arialiveChoice3">Assertive</label>
                </div>
              </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <legend>Aria-atomic attribute (enabled when checked)</legend>
              <div className={styles.radiobuttons_container}>
                <div>
                  <input type="checkbox" id="ariaAtomic" name="ariaAtomic" checked={this.state.ariaAtomic} defaultChecked/>
                  <label htmlFor="ariaAtomic">Aria-atomic</label>
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
          aria-live={this.state.ariaLive}
          aria-atomic={this.state.ariaAtomic}
          className={styles.live_region}  
        >
          {this.state.liveRegionText}
        </div>
      </>
    )
  }
}

export default AriaLive