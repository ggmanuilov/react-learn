import React from 'react'
import Steps from '../Steps'
import SimpleSelect from '../../BaseComponents/SimpleSelect'

class DocsStep extends React.Component {

  constructor (props) {
    super(props)

    const {docs, onValidate} = this.props

    this.isValidForm(docs) && onValidate(Steps.DOCS, docs)

    this.state = {
      countryId: '',
      documentTypeId: '',
    }
  }

  isValidForm = (docs) => {
    return docs && docs.countryId && docs.documentTypeId
  }

  onSubmit = (event) => {
    const {onValidate} = this.props
    onValidate(Steps.DOCS, {
      countryId: parseInt(this.state.countryId),
      documentTypeId: parseInt(this.state.documentTypeId),
    })
    event.preventDefault()
  }

  onSelectCountry = (event) => {
    this.setState({
      countryId: event.target.value
    })
  }

  onSelectDoctype = (event) => {
    this.setState({
      documentTypeId: event.target.value
    })
  }

  render () {
    if (this.props.currentStep !== 1) {
      return null
    }

    const {country, doctype, emptyItem} = {
      emptyItem: {
        name: 'Choose',
        // disabled: true
      },
      country: {
        label: 'Country',
        items: [
          {id: 1, name: 'Russia'},
          {id: 2, name: 'England'},
          {id: 3, name: 'China'},
        ],
      },
      doctype: {
        label: 'Type of Document',
        items: [
          {id: 1, name: 'Passport'},
          {id: 2, name: 'Drive License'},
          {id: 3, name: 'Other'},
        ],
      }
    }

    return (
      <form onSubmit={this.onSubmit}>
        <p>Docs Step</p>
        <SimpleSelect
          label={country.label}
          items={country.items}
          value={this.state.countryId}
          emptyItem={emptyItem}
          onSelect={this.onSelectCountry}
        />
        <SimpleSelect
          label={doctype.label}
          items={doctype.items}
          emptyItem={emptyItem}
          value={this.state.documentTypeId}
          onSelect={this.onSelectDoctype}
        />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default DocsStep
