import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  addTrick(event) {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
  }

  render() {
    return(
      <form>
        <select 
          className='stance'
          value={this.state.stance}
          onChange={(event) => this.handleChange(event)}
          name='stance'
          >
          <option>Choose your Stance</option>
          <option>Regular</option>
          <option>Switch</option>
        </select>

         <input 
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <select 
          className='obstacle'
          value={this.state.obstacle}
          onChange={(event) => this.handleChange(event)}
          name='obstacle'
          >
          <option>Choose your Obstacle</option>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>

        <input 
            placeholder='Link to Tutorial'
            type='text'
            name='tutorial'
            value={this.state.tutorial}
            onChange={(event) => this.handleChange(event)}
          />

        <button onClick={(event) => this.addTrick(event)}>Send it!</button>
      </form>
    )
  }
}

export default Form