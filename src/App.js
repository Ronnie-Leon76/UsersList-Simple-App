import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import styled from "styled-components";
import UserList from "./Components/Users/UserList";

const Section = styled.section`
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const UsersListSection = styled.section`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;
`;

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Section>
        <AddUser onAddUser={addUserHandler} />
      </Section>
      <UsersListSection>
        <UserList users={usersList} />
      </UsersListSection>
    </div>
  );
}

export default App;
