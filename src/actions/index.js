
import { addCardToFakeXHR  }  from '../lib/cards.db.js';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARDS = 'ADD_CARDS';
export const DELETE_CARDS = 'DELETE_CARDS';
export const MOVE_CARD = 'MOVE_CARD';


export const loadCards = (cards) => {
  return{
    type: LOAD_CARDS,
    cards: cards
  };
};

export const addCard = (card) => {
   card.stage = 'todo';
   addCardToFakeXHR(card);
  return{
    type: ADD_CARDS,
    newCard: card
  };
};

export const moveCard = (card) => {
  return{
    type: MOVE_CARD,
    movedCard: card
  };
};


export const deleteCard = (card) => {
  return{
    type: DELETE_CARDS,
    deleteCard: card
  };
};


