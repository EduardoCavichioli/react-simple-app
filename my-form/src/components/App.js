import React, { Component } from 'react';

import Form from './Form/Form';
import ShowData from './ShowData/ShowData';

class App extends Component {
  state = {
    formData: {
      name: '',
      city: ''
    }
  }

  formCallback = (formDataFromChild) => {
    this.setState({
      formData: formDataFromChild
    })
  }

  render() {
    let { formData } = this.state;
    return (
      <div>
        <h2>My React App</h2>
        <Form callbackFromParent={this.formCallback}/>
        <ShowData formData={formData} />
      </div>
    );
  }
}

export default App;
