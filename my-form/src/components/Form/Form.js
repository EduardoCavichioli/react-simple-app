import React,{ Component } from 'react';

class Form extends Component {
  render() {
    return(
      <div className="form-wrapper">
        <form>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;