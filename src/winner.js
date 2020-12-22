import React from "react";

function Winner(props) {
  if (props.handleWinner==="X") {
    return <h1>The winner is X</h1>;
  } else if(props.handleWinner==="O"){
    return <h1>The winner is system</h1>;
  }
  else{
      return null;
  }
}

export default Winner;
