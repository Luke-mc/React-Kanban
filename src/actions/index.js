
export const LOAD_TODO = 'LOAD_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const LOAD_DOING = 'LOAD_DOING';
export const ADD_DOING = 'ADD_DOING';
export const DELETE_DOING = 'DELETE_DOING';
export const LOAD_DONE = 'LOAD_DONE';
export const ADD_DONE = 'ADD_DONE';
export const DELETE_DONE = 'DELETE_DONE';

export const loadTodo = (cards) => {
  return{
    type: LOAD_TODO,
    toDoCards: cards
  };
};

export const addToDo = (card) => {
  return{
    type: ADD_TODO,
    newCard: card
  };
};

export const deleteToDo = (card) => {
  return{
    type: DELETE_TODO,
    deleteCard: card
  };
};


export const loadDoing = (cards) => {
  return{
    type: LOAD_DOING,
    doingCards: cards
  };
};

export const addDoing = (card) => {
  return{
    type: ADD_DOING,
    newCard: card
  };
};

export const deleteDoing = (card) => {
  return{
    type: DELETE_DOING,
    deleteCard: card
  };
};


export const loadDone = (cards) => {
  return{
    type: LOAD_DONE,
    doneCards: cards
  };
};

export const addDone = (card) => {
  return{
    type: ADD_DONE,
    newCard: card
  };
};

export const deleteDone = (card) => {
  return{
    type: DELETE_DONE,
    deleteCard: card
  };
};
