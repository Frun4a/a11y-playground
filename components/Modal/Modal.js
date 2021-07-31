import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          show: false
        }
    
        this.showModal = this.showModal.bind(this)
    }

    showModal(e) {
        this.setState({
            show: true
        })
    }

  render() {
    return (
        <>
            <div style={(this.state.show === false) ? ({display:"none"}) : ({display:"block"})}>
                {this.props.children}
            </div>

            <button
                className="example_button"
                onClick={(e) => this.showModal()}
            >
            Open Modal
            </button>

        </>
    )}
}