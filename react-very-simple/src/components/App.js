import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { changeValue } from '../actions/actions';

class App extends Component {
  state = {
    inputValue: ''
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { value, onChangeValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <div>
          My First React App shows the value: {value}
        </div>
        <div>
          <input 
            onChange={this.onInputChange}
            type="text"
            value={inputValue}
            />
          <button onClick={() => onChangeValue(inputValue)}>Click Me</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.mySimpleReducer.value
});

const mapDispatchToProps = (dispatch) => ({
  onChangeValue: (value) => dispatch(changeValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
