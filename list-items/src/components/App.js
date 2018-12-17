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
    console.log(callbackValue);
    this.setState({
      listOfItems: callbackValue
    })
  }

  render() {
    let { listOfItems, filterValue } = this.state;
    return (
      <div className="App">
        <h2>My React App</h2>
        <InputForm callbackFromParent={this.inputFormCallback}/>
        <FilterInput callbackFromParent={this.filterInputCallback}/>
        <FilteredList list={listOfItems} filter={filterValue} callbackFromParent={this.filteredListCallback}/>
      </div>
    );
  }
}

export default App;
