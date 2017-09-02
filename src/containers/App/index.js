import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getCardsFromFakeXHR, getDoingCardsFromFakeXHR }  from '../../lib/cards.db.js';
import { loadToDo, loadDoing } from '../../actions';
import ToDoColumn from '../../components/toDoColumn.js';
import DoingColumn from '../../components/doingColumn.js';



class App extends Component {

  componentWillMount() {
     getCardsFromFakeXHR()
      .then(cards => {
        this.props.loadToDo(cards);
      })
      .catch(err => {
        console.log(err);
      });

      getDoingCardsFromFakeXHR()
      .then( cards => {
         this.props.loadDoing(cards);
      });

  }

  render() {
    return (
      <div className ="mainContainer">
          <div className = "header">
            <h1>Title</h1>
          </div>

          <div className = "columnContainer">

            <ToDoColumn
            cards = {this.props.toDoCards}
            />

            <DoingColumn
              cards = {this.props.doingCards}
            />

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
      },
      loadDoing: (cards) => {
        dispatch(loadDoing(cards));
      }
    }
  }


const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

export default ConnectedApp;


