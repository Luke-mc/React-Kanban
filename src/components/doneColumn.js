import React from 'react';

const moveCard = (stage) => {
    console.log(stage.title);
};



const DoneColumn = ({cards, moveCard, deleteCard}) => {

  return (
    <ul>
      {

        cards.map((card) => {
          var name = `done_${card._id}`
          return(
            <div className ='done' id = {name}>
              <p>{card.title}</p>
              <p>{card.priority}</p>
              <p>{card.createdBy}</p>
              <p>{card.assignedTo}</p>
              <p style = {{display: "none"}}>{card._id}</p>
              <button onClick = {moveCard.bind(this, card)} className="done_btn_inProgress">In Progress</button>
              <button onClick = {deleteCard.bind(this, card)}  className="done_btn_delete">Delete</button>
            </div>
          )
        })
      }
    </ul>
  );
};

export default DoneColumn;