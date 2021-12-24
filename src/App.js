import React from "react";
import AddUser from "./Components/Users/AddUser";
import styled from "styled-components";
import UsersList from './Components/Users/UsersList'
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
let users = (
  <p style={{ textAlign: "center" }}>No users found. Maybe add one? </p>
);
const [usersList, setUsersList] = useState([
  { name: "ELon Musk", age: '49', id: 'g1' },
  { name: "Jeff Bezos", age: '50', id: 'g2' },
]);
if(usersList.length > 0){
  users = (<UsersList items={usersList} />)
}

function App() {
  return (
    <div>
      <Section>
        <AddUser />
      </Section>
      <UsersListSection>
        {users}
      </UsersListSection>
    </div>
  );
}

export default App;
