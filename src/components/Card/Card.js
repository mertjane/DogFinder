import React from "react";
import { CardWrapper, ImgBOX, CardInfo, Origin, Breed } from "./Card.styled";

const Card = () => {
  return (
    <CardWrapper>
      <ImgBOX />
      <CardInfo>
        <Breed>Breed</Breed>
        <Origin>Origin</Origin>
      </CardInfo>
    </CardWrapper>
  );
};

export default Card;
