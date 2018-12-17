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

  render() {
    let { filter } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="my-filter-value">Filter</label>
        <input type="text" className="form-control" id="my-filter-value" value={filter} onChange={this.handleFilterChange}/>
      </div>
    )
  }
}

export default FilterInput;