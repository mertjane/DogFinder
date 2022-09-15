import { useState, useEffect } from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MainWrapper,
  Wrapper,
  Img,
  Info,
  Breed,
  Pupularity,
  Origin,
  Temperament,
  Summary,
} from "./Detail.styled";
const starStyle = {
  color: "#5585ce",
};

const Detail = () => {
  const { dog_id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/dogs/${dog_id}`)
      .then((res) => res.data)
      .then((data) => setDog(data));
  }, [dog_id]);

  return (
    <MainWrapper>
      {dog && (
        <Wrapper>
          <Img src={dog.photo} />
          <Info>
            <Breed>{dog.breed}</Breed>
            <Pupularity>
              <RiStarFill size={30} style={starStyle} />
              <RiStarFill size={30} style={starStyle} />
              <RiStarFill size={30} style={starStyle} />
              <RiStarFill size={30} style={starStyle} />
              <RiStarHalfFill size={30} style={starStyle} />
              {dog.popularity}
            </Pupularity>
            <Origin>{dog.origin}</Origin>
            <Temperament>{dog.temperament.join(", ")}</Temperament>
            <Summary>{dog.summary}</Summary>
          </Info>
        </Wrapper>
      )}
    </MainWrapper>
  );
};

export default Detail;
