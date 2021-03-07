import styled from "styled-components";
import { FaUserNinja } from "react-icons/fa";

const LoadUser = ({ user, startEdit, deleteUser }) => {
  return (
    <UserLoad>
      <FaUserNinja style={{ marginLeft: "20%", fontSize: "30px" }} />

      <span
        style={{ color: "grey", cursor: "pointer" }}
        onClick={() => startEdit(user.id)}
      >
        {" "}
        Edit
      </span>

      <span
        style={{ color: "#800000", cursor: "pointer" }}
        onClick={() => deleteUser(user.id)}
      >
        {" "}
        Delete
      </span>

      <h3 style={{ textAlign: "center" }}>{user.name}</h3>
      <p style={{ textAlign: "center" }}>{user.job}</p>
    </UserLoad>
  );
};

export default LoadUser;

const UserLoad = styled.div`
  margin-right: 2%;
  margin-left: 5%;
  padding: 2%;
  margin-bottom: 5%;
  border-radius: 38% 62% 55% 45% / 32% 53% 47% 68%;
  animation: vawe 8s infinite steps(60);
  border: 3px solid black;
  background-image: linear-gradient(45deg, #1a000d, #4d004d);
  box-shadow: 5px 10px #0f0f0a, inset 0 0 10px #000000;
  @keyframes vawe {
    //20% {
    //    border-radius: 45% 55% 62% 38% / 53% 51% 49% 47%;
    // }
    // 40% {
    //   border-radius: 45% 55% 49% 51% / 36% 51% 49% 64%;
    // }
    // 60% {
    //  border-radius: 60% 40% 57% 43% / 47% 62% 38% 53%;
    // }
    // 80% {
    //  border-radius: 60% 40% 32% 68% / 38% 36% 64% 62%;
    //}
  }
  &:nth-child(1) {
    border-radius: 38% 62% 33% 67% / 60% 53% 47% 40%;
  }
  &:nth-child(2) {
    border-radius: 80% 62% 33% 67% / 60% 56% 47% 40%;
  }
  &:nth-child(3) {
    border-radius: 38% 62% 55% 45% / 52% 53% 47% 48%;
  }
  &:nth-child(4) {
    border-radius: 38% 62% 55% 45% / 32% 53% 47% 68%;
  }
  &:nth-child(5) {
    border-radius: 70% 40% 32% 68% / 38% 40% 64% 62%;
  }
  &:nth-child(6) {
    border-radius: 38% 62% 33% 67% / 60% 53% 47% 40%;
  }
  &:nth-child(7) {
    border-radius: 38% 62% 55% 45% / 52% 53% 47% 48%;
  }
  &:nth-child(8) {
    border-radius: 56% 40% 54% 68% /76% 37% 64% 62%;
  }
  &:nth-child(9) {
    border-radius: 60% 40% 32% 68% / 38% 36% 64% 62%;
  }
  &:nth-child(10) {
    border-radius: 38% 62% 33% 67% / 60% 53% 47% 40%;
  }
`;
