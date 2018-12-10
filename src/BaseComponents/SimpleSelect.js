import React from 'react'

class SimpleSelect extends React.Component {

  render () {

    let renderItems = []

    if (this.props.emptyItem) {
      renderItems.push(<option key="-1" value="" disabled={this.props.emptyItem.disabled}>{this.props.emptyItem.name}</option>)
    }

    renderItems.push(this.props.items.map(item => {
        return (
          <option key={item.id} value={item.id}>{item.name}</option>
        )
      })
    )

    return (
      <label>
        {this.props.label}
        <select onChange={this.props.onSelect} value={this.props.value}>
          {renderItems}
        </select>
      </label>
    )
  }
}

export default SimpleSelect
