import React from 'react'

class SelfyStep extends React.Component {

  onSubmit = (event) => {
    const {onAfterValidate} = this.props
    onAfterValidate()
    event.preventDefault()
  }

  render () {
    if (this.props.currentStep !== 2) {
      return null
    }
    return (
      <form onSubmit={this.onSubmit}>
        <p>Selfy Step</p>
        <input type="text" />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default SelfyStep
