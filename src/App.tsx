import React, { useState } from "react";
import styled from "styled-components";
import Inputs from "./components/Inputes";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    CardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  return (
    <MainDiv>
      <Card cardInfo={cardInfo} />
      <Inputs cardInfo={cardInfo} setCardInfo={setCardInfo} />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default App;
