import React, {Component} from 'react'
import './App.css'
import ProfileWizard from './Wizard/ProfileWizard'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <React.StrictMode>
            <ProfileWizard/>
          </React.StrictMode>
        </header>
      </div>
    )
  }
}

export default App
