import React, { Component } from 'react';
import './App.css';

import { Button } from 'reactstrap';

class App extends Component {
  state = {
    listOfItems: ["banana","maca"]
  }
  render() {
    let { listOfItems } = this.state;
    return (
      <div className="App">
        <div className="title">
          My React App
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
