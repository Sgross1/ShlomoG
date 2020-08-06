import React from 'react';

function FormInput(props){
  return(
    <React.Fragment >
      <label>{props.label} 22</label>
      <input type={props.type} defaultValue={props.defaultValue}  className="form-control" id={props.id}/>
    </React.Fragment>
  )
}

export default FormInput