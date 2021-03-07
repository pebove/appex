import styled from "styled-components";
import { FaUserPlus } from "react-icons/fa";

const Head = ({ onToggle, toggleform, showOnlyAdd }) => {
  return (
    <Header>
      <Title>
        <span>"Ninja</span>
        <span>&nbsp;</span>
        <span>Users"</span>
      </Title>
      <Btn
        className="btnanim"
        toggleform={toggleform}
        onClick={(e) => {
          onToggle(e);
          showOnlyAdd(e);
        }}
      >
        {toggleform ? "Chiudi" : "Crea"}
        <FaUserPlus style={{ marginLeft: "15%", fontSize: "20px" }} />
      </Btn>
    </Header>
  );
};

export default Head;

const Btn = styled.button`
  flex: 1;
  height: 40px;
  border-radius: 50px 50px 50px 50px;
  font-size: 15px;
  outline: none;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  &.btnanim {
    background: #003300;
    border: 3px solid #0f0f0a;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #001a00;
      border-radius: inherit;
      box-shadow: 0 0 0 2px #0f0f0a, 0 0.625em 0 0 rgb(26, 26, 26);
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: #4d0000;
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px #330000, 0 0.5em 0 0 #0f0f0a;
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: rgb(26, 26, 26);
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px #0f0f0a, 0 0 rgb(26, 26, 26);
        transform: translate3d(0, 0, -1em);
      }
    }
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  margin-bottom: 5%;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 4px;
  text-shadow: 4px 4px 6px rgba(255, 255, 255, 0.1),
    0.05em -0.03em 0 rgba(0, 0, 0, 1), 0.05em 0.005em 0 rgba(0, 0, 0, 1),
    0em 0.08em 0 rgba(0, 0, 0, 1), 0.05em 0.08em 0 rgba(0, 0, 0, 1),
    0px -0.03em 0 rgba(0, 0, 0, 1), -0.03em -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1);
  span {
    transform: scale(0.9);
    display: inline-block;
  }
  span:first-child {
    animation: bop 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  }
  span:last-child {
    animation: bopB 2s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }

  /* @keyframes bop {
    0% {
      transform: scale(0.9);
    }
    50%,
    100% {
      transform: scale(1);
    }
  }

  @keyframes bopB {
    0% {
      transform: scale(0.9);
    }
    80%,
    100% {
      transform: scale(1) rotateZ(-3deg);
    }
  }*/
`;
