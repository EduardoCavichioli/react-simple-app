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
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="my-filter-value">Filter</label>
            <input type="text" className="form-control" id="my-filter-value" value={filter} onChange={this.handleFilterChange}/>
          </div>
          <button className="btn btn-secondary" onClick={this.handleClearFilter}>Clear filter</button>
        </form>
      </div>
    )
  }
}

export default FilterInput;