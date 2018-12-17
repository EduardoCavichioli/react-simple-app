import React, { Component } from 'react';
import './App.css';

import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          My React App
        </div>
        <div>
          <Button color="danger">danger</Button>
        </div>
      </div>
    );
  }
}

export default App;
