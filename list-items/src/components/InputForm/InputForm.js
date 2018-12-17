import React, { Component } from 'react';

class InputForm extends Component {
  state = {
    value: ''
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.callbackFromParent(this.state.value);
    this.setState({
      value: ''
    });
    event.preventDefault();
  }

  render() {
    let { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="my-input-value">Value</label>
            <input type="text" className="form-control" id="my-input-value" onChange={this.handleInputChange} value={value} />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default InputForm;