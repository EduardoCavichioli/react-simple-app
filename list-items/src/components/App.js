import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    listOfItems: ["banana","maca"],
    inputValue: '',
    filterValue: ''
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleFilterChange = (event) => {
    this.setState({
      filterValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    let { listOfItems, inputValue } = this.state;
    listOfItems.push(inputValue);

    this.setState({
      listOfItems: listOfItems
    })
    event.preventDefault();
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
    let { listOfItems, inputValue, filterValue } = this.state;

    let filteredList = listOfItems.filter(this.checkFilter);
    return (
      <div className="App">
        <div className="title">
          My React App
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="my-input-value">Value</label>
            <input type="text" className="form-control" id="my-input-value" value={inputValue} onChange={this.handleInputChange} />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
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
