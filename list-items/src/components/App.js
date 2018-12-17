import React, { Component } from 'react';
import './App.css';

import { Button } from 'reactstrap';

class App extends Component {
  state = {
    listOfItems: ["banana","maca"],
    inputValue: ''
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleInsertItem = (value) => {
    let list = this.state.listOfItems;
    list.push(value);

    this.setState({
      listOfItems: list
    })
  }

  render() {
    let { listOfItems, inputValue } = this.state;
    return (
      <div className="App">
        <div className="title">
          My React App
        </div>
        <div>
          <input 
            onChange={this.onInputChange}
            type="text"
            value={inputValue}
            />
          <button className="btn btn-primary" onClick={() => this.handleInsertItem(inputValue)}>Add</button>
        </div>
        <div>
          <ul>
            {listOfItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
