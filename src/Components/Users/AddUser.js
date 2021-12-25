import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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
    border: 1px solid "#ccc";
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
    background: "ffd7d7";
  }
  &.invalid label {
    color: "red";
  }
`;

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <section>
        {error && (<ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />) }
      
      <form onSubmit={formSubmitHandler}>
        <FormControl>
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
