import React from 'react';



const Column = ({title, priority, createdBy, AssignedTo}) => {
  console.log('TODO CARD:' ,cards);
  return (
    <ul>
          return(
            <div className="card">
              <p>{title}</p>
              <p>{priority}</p>
              <p>{createdBy}</p>
              <p>{AssignedTo}</p>
            </div>
          )

    </ul>
  );
};

export default Column;