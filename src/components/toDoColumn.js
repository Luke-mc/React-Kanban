import React from 'react';



const ToDoColumn = ({cards, moveCard, deleteCard}) => {

  return (
    <ul>
      {
        cards.map((card) => {
          return(
            <div className= 'todo'>
              <p>{card.title}</p>
              <p>{card.priority}</p>
              <p>{card.createdBy}</p>
              <p>{card.assignedTo}</p>
              <button onClick = {moveCard.bind(this, card)} className="toDo_btn_inProgress">In Progress</button>
              <button onClick = {deleteCard.bind(this, card)}  className="toDo_btn_delete">Delete</button>
            </div>
          )
        })
      }
    </ul>
  );
};

export default ToDoColumn;