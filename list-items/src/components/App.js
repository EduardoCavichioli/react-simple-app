import React, { Component } from 'react';
import './App.css';

import InputForm from './InputForm/InputForm';

class App extends Component {
  state = {
    listOfItems: ["banana","maca"],
    filterValue: ''
  }

  myCallBack = (callbackValue) => {
    let { listOfItems } = this.state;
    listOfItems.push(callbackValue);

    this.setState({
      listOfItems: listOfItems
    })
  }

  handleFilterChange = (event) => {
    this.setState({
      filterValue: event.target.value
    })
  }

  checkFilter = (value) => {
    let { filterValue } = this.state;

    if (filterValue === '') {
      return true;
    } else if (value.includes(filterValue)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let { listOfItems, filterValue } = this.state;

    let filteredList = listOfItems.filter(this.checkFilter);
    return (
      <div className="App">
        <div className="title">
          My React App
        </div>
        <InputForm callbackFromParent={this.myCallBack}/>
        <div className="form-group">
          <label htmlFor="my-filter-value">Filter</label>
          <input type="text" className="form-control" id="my-filter-value" value={filterValue} onChange={this.handleFilterChange}/>
        </div>
        <div>
          <ul>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
