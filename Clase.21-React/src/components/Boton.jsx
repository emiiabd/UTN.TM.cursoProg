import React from "react";

export const Button = (props)=>{
  console.log(props)
  return(
    <button>{props.texto +props.edad}</button>
  );
};

/* abreviaciones RAFCE O RAFC */