import React from "react";

function Winner(props) {
  if (props.handleWinner==="X") {
    return (
      <div>
         <h1>The winner is X</h1>;
         
      </div>
    )
   
  } else if(props.handleWinner==="O"){
    return (
      <div>
         <h1>The winner is System</h1>;
       
      </div>
    )
  }
  else{
      return null;
  }
}

export default Winner;
