import Head from "./components/Head";
import AddEdit from "./components/AddEdit";
import UsersList from "./components/UsersList";
import { useState, useEffect } from "react";
import styled from "styled-components";

function App() {
  const [toggleform, setToggleform] = useState(false);
  const [users, setUser] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch Users
  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser();
      setUser(userFromServer);
    };

    getUser();
  }, []);
  const fetchUser = async () => {
    const response = await fetch(
      "https://602a74f66c995100176ee630.mockapi.io/api/v1/users"
    );
    const loadUser = await response.json();

    return loadUser;
  };

  // Add User
  const addUser = async (user) => {
    const response = await fetch(
      "https://602a74f66c995100176ee630.mockapi.io/api/v1/users",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const newUser = await response.json();
    setUser([...users, newUser]);
  };

  // Edit User
  const editUser = async (id, user) => {
    const response = await fetch(
      `https://602a74f66c995100176ee630.mockapi.io/api/v1/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const newUser = await response.json();
    newUser.id = id;

    const newUsers = users.filter((user) => user.id !== id);
    const unOrderedUsers = [...newUsers, newUser];
    const orderedUsers = unOrderedUsers.sort((a, b) => a.id - b.id);

    setUser(orderedUsers);
  };

  const startEditing = (id) => {
    setShowEdit(false);
    setShowAdd(true);
    setToggleform(true);
    setEditId(id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Delete User
  const deleteUser = async (id) => {
    await fetch(
      `https://602a74f66c995100176ee630.mockapi.io/api/v1/users/${id}`,
      {
        method: "DELETE",
      }
    );

    setUser(users.filter((user) => user.id !== id));
  };
  const [showOnlyEdit, setShowEdit] = useState(true);
  const [showOnlyAdd, setShowAdd] = useState(true);

  return (
    <Container>
      <Head
        showOnlyAdd={() => {
          setShowAdd(false);
          setShowEdit(true);
        }}
        onToggle={() => setToggleform(!toggleform)}
        toggleform={toggleform}
      />
      {toggleform && (
        <AddEdit
          users={users}
          showOnlyAdd={showOnlyAdd}
          showOnlyEdit={showOnlyEdit}
          onToggle={() => setToggleform(!toggleform)}
          toggleform={toggleform}
          toggleform={setToggleform}
          edit={editUser}
          editId={editId}
          add={addUser}
        />
      )}
      <UsersList
        users={users}
        startEdit={startEditing}
        deleteUser={deleteUser}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 10px solid rgb(50, 9, 9);
  background-color: rgb(30, 30, 40);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  padding: 1em;
  line-height: 1.5em;
  box-shadow: 5px 10px #302f2f, inset 0 0 10px #000000;
`;
