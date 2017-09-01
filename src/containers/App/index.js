import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
          <h2>Welcome to React</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{

  }
}

const mapDispatchToProps = dispatch => {
  return{

  }
}

const ConnectedApp(
    mapStateToProps,
    mapDispatchToProps
  )(App)

export default ConnectedApp;
