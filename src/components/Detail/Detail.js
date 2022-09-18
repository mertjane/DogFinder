import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MainWrapper,
  ButtonWrap,
  BackBtn,
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
  const navigate = useNavigate();
  const { dog_id } = useParams();
  const [dog, setDog] = useState(null);

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/dogs/${dog_id}`)
      .then((res) => res.data)
      .then((data) => setDog(data));
  }, [dog_id]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <MainWrapper>
        <ButtonWrap>
          <BackBtn onClick={goBack}>
            <IoIosArrowBack size={20} /> Back
          </BackBtn>
        </ButtonWrap>
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
    </motion.div>
  );
};

export default Detail;
