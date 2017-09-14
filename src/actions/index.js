
import { addCardToFakeXHR  }  from '../lib/cards.db.js';
import Axios from 'axios';
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

export const getCards = () => {
    return (dispatch) => {

    return Axios.get("http://localhost:3000/cards")
      .then(response => {
        dispatch(loadCards(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addCard = (card) => {

  return{
    type: ADD_CARDS,
    newCard: card
  };
};

export const addDBCards = (card) => {
    return (dispatch) => {

    return Axios.post("http://localhost:3000/card",
    card
    )
      .then(response => {
        console.log('response',response);
        dispatch(addCard(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const moveCard = (id) => {
  return{
    type: MOVE_CARD,
    movedCard: id
  };
};

export const moveDBCards = (id) => {

    return (dispatch) => {

    return Axios.put(`http://localhost:3000/movecard/${id}`)
      .then(response => {
        dispatch(moveCard(id));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteCard = (id) => {
  return{
    type: DELETE_CARDS,
    id: id
  };
};

export const deleteDBCards = (id) => {

    return (dispatch) => {

    return Axios.delete(`http://localhost:3000/card/${id}`)
      .then(response => {
        dispatch(deleteCard(id));
      })
      .catch(error => {
        throw(error);
      });
  };
};

