import React, { Component } from 'react'
import EditAnimalForm from './EditAnimalForm'

export default class Animal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    let { animal } = this.props
    return (
      <div style={{ border: '1px solid #eee', margin: 10}}>
        <img src={animal.imageUrl} alt="" width="200"/>
        {this.state.edit ?
          <EditAnimalForm 
            animal={animal}
            updateAnimal={this.props.updateAnimal}/>
          :
          <div>
            <p>species: {animal.species}</p>
            <p>qty: {animal.quantity}</p>
          </div>
        }
        {this.state.edit ?
          <button onClick={this.toggleEdit}>cancel</button>
          :
          <button onClick={this.toggleEdit}>edit</button>
        }
        <button onClick={this.props.deleteAnimal}>delete</button>
      </div>
    )
  }
}