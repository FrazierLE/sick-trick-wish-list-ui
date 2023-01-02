import { Component } from 'react';
import TricksContainer from '../TricksContainer/TricksContainer';
import './App.css';
import Form from '../Form/Form';
// import { fetchData } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
    this.addTrick = this.addTrick.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(res => res.json())
      .then(data => this.setState({ tricks: data }))
      .catch(err => console.log('error', err))
  }

  addTrick(newTrick) {
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        < Form addTrick={this.addTrick}/>
        < TricksContainer tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;