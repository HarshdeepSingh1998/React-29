import React, { useState } from "react";

// function ToDoItem(props){

//   const [isDone , setIsDone] = useState(false);

//   function handleClick(){
//     setIsDone(prevValue =>{
//       return(!prevValue);
//     })

//   }

//   return (
//   <div onClick={handleClick}>

//     {/* when isDone is true then line through */}
//   <li style ={{textDecoration: isDone?"line-through":"none"}}>{props.text}</li>
//   </div>
//   );
// }

// export default ToDoItem;

function ToDoItem(props) {
  return (
    // <div onClick={props.onChecked}>
    // we cant do this to pass id to the onChecked
    // <div onClick={props.onChecked(props.id)}
    // instead do this to pass id
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
