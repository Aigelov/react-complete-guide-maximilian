import React from 'react';

const person = ( props ) => {
  const style = {
    border: '1px solid #CCC',
    display: 'inline-block',
    margin: '10px 10px',
    padding: '10px'
  };
  return (
    <div style={style}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
      {props.children ? <p>{props.children}</p> : null}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;