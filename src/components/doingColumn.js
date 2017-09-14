import React from 'react';



const DoingColumn = ({cards, moveInQueue, moveToDone, deleteCard }) => {

  return (
    <ul>
      {
        cards.map((card) => {
          var priority = `${card.priority}`;
          return(
            <div className= 'doing'id={priority}>
              <p>{card.title}</p>
              <p>{card.priority}</p>
              <p>{card.createdBy}</p>
              <p>{card.assignedTo}</p>
              <button onClick = {moveInQueue.bind(this, card)} className="doing_btn_toDo">In Queue</button>
              <button onClick = {moveToDone.bind(this, card)}  className="doing_btn_done">Done</button>
              <button onClick = {deleteCard.bind(this, card)}  className="doing_btn_delete">Delete</button>

            </div>
          )
        })
      }
    </ul>
  );
};

export default DoingColumn;

