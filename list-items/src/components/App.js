import React, { Component } from 'react';
import './App.css';

import InputForm from './InputForm/InputForm';
import FilteredList from './FilteredList/FilteredList';

class App extends Component {
  state = {
    listOfItems: ["banana","maca"],
    filterValue: ''
  }

  inputFormCallback = (callbackValue) => {
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

  render() {
    let { listOfItems, filterValue } = this.state;
    return (
      <div className="App">
        <div className="title">
          My React App
        </div>
        <InputForm callbackFromParent={this.inputFormCallback}/>
        <div className="form-group">
          <label htmlFor="my-filter-value">Filter</label>
          <input type="text" className="form-control" id="my-filter-value" value={filterValue} onChange={this.handleFilterChange}/>
        </div>
        <FilteredList list={listOfItems} filter={filterValue}/>
      </div>
    );
  }
}

export default App;
