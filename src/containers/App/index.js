import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getCardsFromFakeXHR }  from '../../lib/cards.db.js';
import { loadToDo } from '../../actions';
import Column from '../../components/Column.js';


class App extends Component {

  componentWillMount() {
     getCardsFromFakeXHR()
      .then(cards => {
        this.props.loadToDo(cards);
      });
  }

  render() {
    return (
      <div className ="mainContainer">
          <div className = "header">
            <h1>Title</h1>
          </div>

          <div className = "columnContainer">
            <Column
              cards = {this.props.toDoCards}
            />

            {/*<DoingList
              cards = {this.props.doingCards}
            />

            <DoneList
              cards = {this.props.doneCards}
            />*/}

          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    toDoCards: state.toDoColumn,
    doingCards: state.doingColumn,
    doneCards: state.doneColumn
  }
}

const mapDispatchToProps = dispatch => {
  return{
     loadToDo: (cards) => {
      dispatch(loadToDo(cards));
    }
  }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

export default ConnectedApp;
