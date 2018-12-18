import React, { Component } from 'react';

class App extends Component {
  state = {
    federalStates: ['','RS','SP','SC'],
    email: '',
    pwd: '',
    add1: '',
    add2: '',
    city: '',
    state: '',
    zip: '',
    checked: false
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    this.setState({
      [id]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    let { 
      federalStates,
      email,
      pwd,
      add1,
      add2,
      city,
      state,
      zip,
      checked  
      } = this.state;
      console.log(this.state);
    return (
      <div>
        <h2>My React App</h2>
        <div className="form-wrapper">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Password" value={pwd} onChange={this.handleInputChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="add1">Address</label>
                  <input type="text" className="form-control" id="add1" placeholder="1234 Main St" value={add1} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="add2">Address 2</label>
                  <input type="text" className="form-control" id="add2" placeholder="Apartment, studio, or floor" value={add2} onChange={this.handleInputChange}/>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" value={city} onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="state">State</label>
                    <select id="state" className="form-control" value={state} onChange={this.handleInputChange}>
                      {federalStates.map(state => <option key={state}>{state}</option>)}
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" value={zip} onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="checked" value={checked} onChange={this.handleInputChange}/>
                      <label className="form-check-label" htmlFor="checked">
                        Check me out
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
