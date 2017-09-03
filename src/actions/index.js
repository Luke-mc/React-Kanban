
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARDS = 'ADD_CARDS';
export const DELETE_CARDS = 'DELETE_CARDS';


export const loadCards = (cards) => {
  return{
    type: LOAD_CARDS,
    cards: cards
  };
};

export const addCards = (card) => {
  return{
    type: ADD_CARDS,
    newCard: card
  };
};

export const deleteCards = (card) => {
  return{
    type: DELETE_CARDS,
    deleteCard: card
  };
};


