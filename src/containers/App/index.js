import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import  NewCard  from '../NewTask/index.js';
import { getCardsFromFakeXHR, addCardToFakeXHR }  from '../../lib/cards.db.js';
import { loadCards , addCard } from '../../actions';
import Column from '../../components/column.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      ishidden: true
    };
  }

  componentWillMount() {
     getCardsFromFakeXHR()
        .then(cards => {
          this.props.loadCards(cards);
        })
        .catch(err => {
          console.log(err);
        });
  }

  addNewCard(card){
    addCardToFakeXHR(card)
      .then(books => {
          addCard(card);
      });
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
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

    const showPopup = () => {
      document.getElementById('popup').style.display = "block";
    };

    const hidePopup = () => {
      document.getElementById('popup').style.display = "none";
    };

    return (
      <div className ="mainContainer">
          <div className = "header">
            <h1>kanban</h1>
            <button className = "newTask" onClick={this.toggleHidden.bind(this)}>+ New Task</button>
          </div>

          {!this.state.isHidden && <NewCard/> }\

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
            <div className = "rightColumn">
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


