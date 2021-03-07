import LoadUser from "./LoadUser";
import styled from "styled-components";

const UsersList = ({ users, startEdit, deleteUser }) => {
  return (
    <List>
      {users.map((user) => (
        <LoadUser
          key={user.id}
          user={user}
          startEdit={(id) => startEdit(id)}
          deleteUser={deleteUser}
        />
      ))}
    </List>
  );
};

export default UsersList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
