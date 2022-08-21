import React from "react";

function AddButton (props) {
  return (
    <button 
    className='btn btn-add'
    onClick={() => props.handleAdd()}
    >
        {props.name}
    </button>
  )
}

function CancelButton (props) {
  return (
    <button 
        className='btn btn-cancel' 
        onClick={props.changeVisibility(props.target)}
    >                
        Cancel 
    </button> 
  )
}

export { AddButton, CancelButton };