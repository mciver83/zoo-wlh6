import React, { Component } from 'react'

export default class EditAnimalForm extends Component {
  constructor(props) {
    super(props)

    let { species, quantity } = props.animal

    this.state = {
      species,
      quantity
    }
  }

  handleChange = e => {
    let { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let updatedAnimal = { ...this.props.animal, ...this.state}
    console.log(111111, updatedAnimal)
    this.props.updateAnimal(updatedAnimal)
  }

  render() {
    return (
      <div style={{border: '1px solid black', margin: 20, display: 'flex', flexDirection: 'column'}}>
        <input 
          type="text"
          name="species"
          value={this.state.species}
          placeholder="species"
          onChange={this.handleChange}/>
        <input 
          type="number"
          name="quantity"
          value={this.state.quantity}
          placeholder="quantity"
          onChange={this.handleChange}/>
        <button onClick={this.handleClick}>update animal</button>
      </div>
    )
  }
}