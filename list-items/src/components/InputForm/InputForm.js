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
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control"
            onChange={this.handleInputChange}
            value={value}
            placeholder="Value"
            aria-label="value"
            aria-describedby="value-input"
            />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }

}

export default InputForm;