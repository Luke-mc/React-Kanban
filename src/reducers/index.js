import {
   LOAD_CARDS,
   ADD_CARDS,
   DELETE_CARDS,
   MOVE_CARD
} from '../actions';

const initialState = {
   cards: []
};

const cards = (state = initialState, action) => {
  switch(action.type){
    case  LOAD_CARDS:
      return{
          cards :[...action.cards]
      }
      break;

    case ADD_CARDS:

      return{
        cards :[...state.cards, action.newCard]
      }
      break;

    case  MOVE_CARD:
      return{
        cards: state.cards.filter((card) => {
          return parseInt(card._id) !== parseInt(action.movedCard._id);
        })
      }

      break;

     case  DELETE_CARDS:
      return{
        cards: state.cards.filter((card) => {
          return card._id !== parseInt(action.deleteCard._id);
        })
      }
      break;

    default:
      return state;

  }
};

export default cards;