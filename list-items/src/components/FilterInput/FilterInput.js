import React, { Component } from 'react';

class FilterInput extends Component {

  state = {
    filter: ''
  }

  handleFilterChange = (event) => {
    this.props.callbackFromParent(event.target.value);
    this.setState({
      filter: event.target.value
    });
  }

  handleClearFilter = (event) =>{
    this.props.callbackFromParent('');
    this.setState({
      filter: ''
    });
    event.preventDefault();
  }

  render() {
    let { filter } = this.state;
    return (
      <div className="input-group mb-3">
        <input 
          type="text"
          className="form-control"
          value={filter} 
          onChange={this.handleFilterChange}
          placeholder="Filter"
          aria-label="filter"
          aria-describedby="filter-value"
          />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={this.handleClearFilter}>Clear filter</button>  
        </div>
      </div>
    )
  }
}

export default FilterInput;