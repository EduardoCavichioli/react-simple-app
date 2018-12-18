import React,{ Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    city: ''
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    })
  }

  handleSubmit = (event) => {
    this.props.callbackFromParent(this.state);
    this.setState({
      name: '',
      city: ''
    })
    event.preventDefault();
  }

  render() {
    let { name, city } = this.state;
    return(
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" placeholder="City" value={city} onChange={this.handleInputChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    )
  }
}

export default Form;