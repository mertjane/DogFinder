import React from "react";
import { CardWrapper, ImgBOX, CardInfo, Origin, Breed } from "./Card.styled";

const Card = (props) => {
  return (
    <CardWrapper>
      <ImgBOX src={props.photo} />
      <CardInfo>
        <Breed>{props.breed}</Breed>
        <Origin>{props.origin}</Origin>
      </CardInfo>
    </CardWrapper>
  );
};

export default Card;
