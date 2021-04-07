import React from 'react'

class CheckboxesGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interest_coding: true,
      interest_music: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

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
        <form>
          <fieldset>
            <legend>Choose your interests</legend>
            <div>
              <input type="checkbox" id="coding" name="interest_coding" checked={this.state.interest_coding} onChange={this.handleInputChange} />
              <label htmlFor="coding">Coding</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="interest_music" checked={this.state.interest_music} onChange={this.handleInputChange} />
              <label htmlFor="music">Music</label>
            </div>
          </fieldset>
          <button className="example_button" onClick={(e) => { e.preventDefault(); alert(JSON.stringify(this.state))}}>Submit</button>
        </form>

        <style jsx>{`
        div {
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
    </>
    )
  }
}

export default CheckboxesGroup