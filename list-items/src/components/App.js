import React, { Component } from 'react';
import './App.css';

import InputForm from './InputForm/InputForm';
import FilteredList from './FilteredList/FilteredList';
import FilterInput from './FilterInput/FilterInput';

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

  filterInputCallback = (callbackValue) => {
    this.setState({
      filterValue: callbackValue
    })
  }

  filteredListCallback = (callbackValue) => {
    this.setState({
      listOfItems: callbackValue
    })
  }

  render() {
    let { listOfItems, filterValue } = this.state;
    return (
      <div className="App">
        <h2>My React App</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <InputForm callbackFromParent={this.inputFormCallback}/>
            </div>
            <div className="col-md-6">
              <FilterInput callbackFromParent={this.filterInputCallback}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FilteredList list={listOfItems} filter={filterValue} callbackFromParent={this.filteredListCallback}/>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
