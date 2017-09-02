import React from 'react';



const toDoColumn = ({cards}) => {
  console.log(cards);
  return (
    <ul>
      {
        cards.map(({title, priority, createdBy, AssignedTo}) => {
          return(
            <div className="card">
              <p>{title}</p>
              <p>{priority}</p>
              <p>{createdBy}</p>
              <p>{AssignedTo}</p>
            </div>
          )
        })
      }
    </ul>
  );
};

export default toDoColumn;