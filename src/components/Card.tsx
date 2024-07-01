import React from "react";
import styled from "styled-components";
import cardback from "/public/images/bg-card-back.png";
import cardfront from "/public/images/bg-card-front.png";
import Cardimg from "/public/images/card-logo.svg";
type CardProps = {
  cardInfo: {
    name: string;
    CardNumber: string;
    mm: string;
    yy: string;
    cvc: string;
  };
};
function Card({ cardInfo }: CardProps) {
  const { name, CardNumber, mm, yy, cvc } = cardInfo;

  return (
    <Maindiv>
      <OneCard>
        <p>{cvc || "CVC"}</p>
      </OneCard>
      <TwoCard>
        <Information>
          <img src={Cardimg} alt="" />
          <div className="info">
            <h1>{CardNumber || "0000 0000 0000 0000"}</h1>
            <div className="ifn">
              <h1>{name || "Jane Appleseed"}</h1>
              <span>
                {mm || "MM"}/{yy || "YY"}
              </span>
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

  h1,
  span {
    color: var(--White, #fff);
    font-family: "Space Grotesk";
    font-size: 9px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 18px;
    letter-spacing: 2.2px;
  }

  .info {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ifn {
    display: flex;
    justify-content: space-between;
  }
`;

export default Card;
