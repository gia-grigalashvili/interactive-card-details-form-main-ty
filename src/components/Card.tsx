import React from "react";
import styled from "styled-components";
import cardback from "/public/images/bg-card-back.png";
import cardfront from "/public/images/bg-card-front.png";
import Cardimg from "/public/images/card-logo.svg";

function Card() {
  return (
    <Maindiv>
      <OneCard>
        <p>234</p>
      </OneCard>
      <TwoCard>
        <Information>
          <img src={Cardimg} alt="" />

          <div className="info">
            <h1>123</h1>
            <div className="ifn">
              <span>sasa</span>
              <span>sassa</span>
            </div>
          </div>
        </Information>
      </TwoCard>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding: 20px;
`;

const OneCard = styled.div`
  background-image: url(${cardback});
  width: 286px;
  height: 157px;
  background-size: cover;
  margin-left: 50px;
  p {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-left: 180px;
    color: var(--White, #fff);
    text-align: right;
    font-family: "Space Grotesk";
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
`;

const TwoCard = styled.div`
  background-image: url(${cardfront});
  width: 286px;
  height: 157px;
  background-size: cover;
  position: absolute;

  top: 109px;
  img {
    width: 54px;
    height: 30px;
  }
`;
const Information = styled.div`
  padding: 20px;
  h1 {
    color: var(--White, #fff);
    font-family: "Space Grotesk";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.2px;
  }
  .info {
    justify-content: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .ifn {
    display: flex;
    justify-content: space-between;
    p {
      color: var(--White, #fff);
      text-align: right;
      font-family: "Space Grotesk";
      font-size: 9px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
    span {
      color: var(--White, #fff);
      font-family: "Space Grotesk";
      font-size: 9px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
  }
`;
export default Card;
