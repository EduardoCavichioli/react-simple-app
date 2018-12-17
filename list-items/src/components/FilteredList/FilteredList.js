import React, { Component } from 'react';

class FilteredList extends Component {

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
        <ul>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
      </div>
    )
  }
}

export default FilteredList;