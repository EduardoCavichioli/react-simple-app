import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    const { value } = this.props;
    return (
      <div>
        My First React App {value}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.mySimpleReducer.value
});

export default connect(mapStateToProps) (App);
