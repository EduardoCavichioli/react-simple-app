import React, { Component } from 'react';

class FilteredList extends Component {

  handleRemoveClick = (value) => {
    let { list } = this.props;
    let updatedList = list.filter(item => !item.includes(value));
    this.props.callbackFromParent(updatedList);
  }

  checkFilter = (value) => {
    let { filter } = this.props;

    if (filter === '') {
      return true;
    } else if (value.includes(filter)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let { list } = this.props;

    let filteredList = list.filter(this.checkFilter);
    return (
      <div>  
        {filteredList.map((item, index) => (
          <div key={index}>
            <button className="btn btn-light" onClick={() => this.handleRemoveClick(item)}>{item}</button>
          </div>
        ))}
      </div>
    )
  }
}

export default FilteredList;