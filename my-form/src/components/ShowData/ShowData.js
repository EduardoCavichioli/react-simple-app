import React,{ Component } from 'react';

class ShowData extends Component {
  render() {
    let { formData } = this.props;
    console.log(formData);
    return(
      <div>
        My name is {formData.name} and I live in {formData.city}
      </div>
    )
  }
}

export default ShowData;