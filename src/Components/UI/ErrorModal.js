import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";
import  './ErrorModal.css'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

function ErrorModal(props) {
  return <div>
      <Backdrop onClick={props.onConfirm}>
          <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
          </Card>
      </Backdrop>
  </div>;
}
export default ErrorModal;
