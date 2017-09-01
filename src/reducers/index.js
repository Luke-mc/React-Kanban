import {
   LOAD_TODO,
   ADD_TODO,
   DELETE_TODO,
   LOAD_DOING,
   ADD_DOING,
   DELETE_DOING,
   LOAD_DONE,
   ADD_DONE,
   DELETE_DONE
            } from '../actions';

const initialState = {
   toDoColumn: [],
   doingColumn: [],
   doneColumn: []
};

const cards = (state = initialState, action) => {
  switch(action.type){
    case  LOAD_TODO:
      return{
        toDoColumn:[...action.toDoCards]
      }
      break;

    case ADD_TODO:
      return{
        toDoColumn:[...state.toDoCards, newCard]
      }
      break;

    case  LOAD_DOING:
      return{
        doingColumn:[...action.doingCards]
      }
      break;

    case ADD_DOING:
      return{
        doingColumn:[...state.doingCards, newCard]
      }
      break;

    case  LOAD_DONE:
     return{
        doneColumn:[...action.doneCards]
      }
      break;

    case ADD_DONE:
     return{
        doneColumn:[...state.doneCards, newCard]
      }
      break;

    default:
      return state;

  }
};

export default cards;