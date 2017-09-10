import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import  NewCard  from '../NewTask/index.js';
import { getCardsFromFakeXHR, addCardToFakeXHR, moveCardInFakeXHR, deleteCardFromFakeXHR }  from '../../lib/cards.db.js';
import { loadCards , addDBCards, addCard, moveCard, deleteDBCards,  } from '../../actions';
import DoingColumn from '../../components/doingColumn.js';
import Column from '../../components/column.js';
import DoneColumn from '../../components/doneColumn.js';
import ToDoColumn from '../../components/toDoColumn.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      ishidden: true
    };
  }


  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

   moveDoneCard(card) {
    moveCardInFakeXHR(card, 'doing')
      .then(card => {
        this.props.moveCard(card);
      });
  }

  moveToDone(card) {
    moveCardInFakeXHR(card, 'done')
      .then(card => {
        this.props.moveCard(card);
      });
  }


  moveToQueue(card) {
    moveCardInFakeXHR(card, 'todo')
      .then(card => {
        this.props.moveCard(card);
      });

  }

  deleteACard(card) {
    this.props.deleteDBCards(card.id);

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
            <button className = "newTask" onClick={this.toggleHidden.bind(this)}>+ New Task</button>
          </div>

          {!this.state.isHidden && <NewCard/> }

          <div className = "columnContainer">

            <div className = "leftColumn">
              <h2>In Queue</h2>
                <ToDoColumn
                cards = {todoCards}
                moveCard = {this.moveDoneCard.bind(this)}
                deleteCard = {this.deleteACard.bind(this)}
                />
            </div>
            <div className = "middleColumn">
              <h2>In Progress</h2>
                <DoingColumn
                 cards = {doingCards}
                 moveInQueue = {this.moveToQueue.bind(this)}
                 moveToDone = {this.moveToDone.bind(this)}
                 deleteCard = {this.deleteACard.bind(this)}
                />
            </div>
            <div className = "rightColumn">
              <h2>Done</h2>
                 <DoneColumn
                 cards = {doneCards}
                 moveCard = {this.moveDoneCard.bind(this)}
                 deleteCard = {this.deleteACard.bind(this)}
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
      },
    addCard: (card) => {
        dispatch(addCard(card));
      },
    addDBCards: (card) => {
        dispatch(addDBCards(card));
      },
    moveCard: (id) => {
      dispatch(moveCard(id));
      },
    deleteDBCards: (card) => {
      dispatch(deleteDBCards(card));
      },
    }
  }


const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

export default ConnectedApp;


