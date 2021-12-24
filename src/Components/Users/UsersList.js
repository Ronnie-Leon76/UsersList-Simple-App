import React from "react";
import styled from "styled-components";
import User from "./User";

const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function UsersList(props) {
  return (
    <div>
      <UnorderedList>
        {props.items.map((user) => (
          <User key={user.id}>
            {user.name}
            
          </User>
        ))}
      </UnorderedList>
    </div>
  );
}

export default UsersList;
