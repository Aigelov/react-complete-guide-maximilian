import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #EEE;
  box-shadow: 0 2px 3px green;
  padding: 16px;
  text-align: center;

  @media(min-width: 800px) {
    border: 1px solid green;
    width: 450px;
  }
`;

const Person = props => {
  return (
    <StyledDiv>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
      {props.children ? <p>{props.children}</p> : null}
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  )
};

export default Person;
