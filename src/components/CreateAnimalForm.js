import React, { Component } from 'react'

export default class CreateAnimalForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: '',
      quantity: 0,
      imageUrl: ''
    }
  }

  handleChange = e => {
    let { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newAnimal = this.state
    this.props.createAnimal(newAnimal)
  }

  render() {
    return (
      <div style={{border: '1px solid black', margin: 20}}>
        <input 
          type="text"
          name="species"
          placeholder="species"
          onChange={this.handleChange}
          value={this.state.species}/>
        <input 
          type="text"
          name="imageUrl"
          placeholder="image url"
          onChange={this.handleChange}
          value={this.state.imageUrl}/>
        <input 
          type="number"
          name="quantity"
          placeholder="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}/>
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}