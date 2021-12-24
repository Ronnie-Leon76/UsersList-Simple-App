import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const FormControl = styled.form`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  &.invalid input {
    border-color: red;
    background: ${props => props.invalid ? 'ffd7d7' : 'transparent'};
  }
  &.invalid label {
    color: ${props => props.invalid ? 'red' : 'black' };
  }
`;

function AddUser() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true)
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if((enteredName.trim().length === 0) && (enteredAge.trim().length === 0)){
        setIsValid(false)
    }
    console.log(enteredName)
    console.log(enteredAge)
    
  };
  return (
    <section>
      <form onSubmit={formSubmitHandler}>
        <FormControl invalid={!isValid}>
          <label>Username</label>
          <input
            type="text"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
          />
          <label>Age</label>
          <input
            type="number"
            value={enteredAge}
            onChange={(e) => setEnteredAge(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Add User</Button>
      </form>
    </section>
  );
}

export default AddUser;
