import {
   LOAD_CARDS,
   ADD_CARDS,
   DELETE_CARDS,
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
        toDoColumn:[...state.cards, action.newCard]
      }
      break;

     case  DELETE_CARDS:
      return{
        toDoColumn:[]
      }
      break;

    default:
      return state;

  }
};

export default cards;