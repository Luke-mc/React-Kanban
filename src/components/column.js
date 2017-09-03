import React from 'react';



const Column = ({cards}) => {
  console.log('TODO CARD:' ,cards);
  return (
    <ul>
      {
        cards.map(({title, priority, createdBy, AssignedTo, stage}) => {
          return(
            <div className= {stage}>
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

export default Column;