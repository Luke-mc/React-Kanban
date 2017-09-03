import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getCardsFromFakeXHR, getDoingCardsFromFakeXHR }  from '../../lib/cards.db.js';
import { loadCards } from '../../actions';
import Column from '../../components/column.js';



class App extends Component {

  componentWillMount() {
     getCardsFromFakeXHR()
        .then(cards => {
          this.props.loadCards(cards);
        })
        .catch(err => {
          console.log(err);
        });
  }

  render() {
    let todoCards = this.props.cards.filter((card) => {
      return card.stage === 'todo';
    });

    let doingCards = this.props.cards.filter((card) => {
      return card.stage === 'doing';
    });

    let doneCards = this.props.cards.filter((card) => {
      return card.stage === 'done';
    });

    return (
      <div className ="mainContainer">
          <div className = "header">
            <h1>kanban</h1>
          </div>

          <div className = "columnContainer">
            <div className = "leftColumn">
              <h2>In Queue</h2>
                <Column
                cards = {todoCards}
                />
            </div>
            <div className = "middleColumn">
              <h2>In Progress</h2>
                <Column
                 cards = {doingCards}
                />
            </div>
            <div className = "middleColumn">
              <h2>Done</h2>
                 <Column
                 cards = {doneCards}
                />
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
   cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return{
     loadCards: (cards) => {
      dispatch(loadCards(cards));
      }
    }
  }


const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

export default ConnectedApp;


