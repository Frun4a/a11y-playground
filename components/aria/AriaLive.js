
import React from 'react'
import nextId from'react-id-generator'

class AriaLive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // interest_coding: true,
      // interest_music: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  alertId = nextId()

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <label htmlFor={this.alertId}>Alert text:</label>
        <textarea
          id={this.alertId}
          name={'Alert_text_area' + this.alertId}
          rows="5"
          cols="33"
          onChange={this.handleChange}
          // value={alertText}
        >
        </textarea>
        <button
          className="example_button"
          // onClick={() => setAlertDivText(alertText)}
        >
          Trigger an alert
        </button>
        {/* <div role="alert">{alertDivText}</div> */}

        <style jsx>{`

          textarea {
              padding: 10px;
              line-height: 1.5;
              border-radius: 5px;
              border: 1px solid #ccc;
              box-shadow: 1px 1px 1px #999;
              min-width: 248px;
              min-height: 95px;
          }
          
          label {
              display: block;
              margin-bottom: 10px;
          }

          [role="alert"] {
            padding: 10px;
            border: 1px solid hsl(206, 74%, 54%);
            border-radius: 5px;
            background: hsl(206, 74%, 95%);
          }

          [role="alert"]:empty {
            display: none;
          }

        `}</style>
    </>
    )
  }
}

export default AriaLive