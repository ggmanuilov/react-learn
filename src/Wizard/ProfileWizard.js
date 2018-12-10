import React from 'react'
import Storage from '../Storage'
import Steps from './Steps'
import DocsStap from './Steps/DocsStep'
import SelfyStep from './Steps/SelfyStep'

class ProfileWizard extends React.Component {

  constructor (props) {
    super(props)

    const docs = JSON.parse(Storage.get(Steps.DOCS))
    const selfy = JSON.parse(Storage.get(Steps.SELFY))

    this.state = {
      currentStep: 1,
      docs: docs === null ? {} : docs ,
      selfy: selfy === null ? {} : selfy
    }
  }

  handleNavigationChange = (next = true) => {

    let {currentStep} = this.state

    if (next) {
      currentStep += (currentStep + 1 <= 2) ? 1 : 0
    } else {
      currentStep -= (currentStep - 1 >= 0) ? 1 : 0
    }

    this.setState({
      currentStep
    })
  }

  storeSave = (step, payload) => {
    this.setState({
      [step]: payload
    })
    return Storage.set(step, JSON.stringify(payload))
  }

  beforeNext = (step, payload) => {
    this.storeSave(step, payload)
    this.next()
  }

  next = () => {
    this.handleNavigationChange()
  }

  previous = () => {
    this.handleNavigationChange(false)
  }

  render () {
    let currentStep = this.state.currentStep
    return (
      <div>
        <button onClick={this.previous}>previous</button>
        <button onClick={this.next}>next</button>
        <hr/>
        <DocsStap
          currentStep={currentStep}
          docs={this.state.docs}
          onValidate={this.beforeNext}
        />
        <SelfyStep
          currentStep={currentStep}
          data={this.state.selfy}
          onAfterValidate={this.beforeNext}
        />
      </div>
    )
  }
}

export default ProfileWizard
