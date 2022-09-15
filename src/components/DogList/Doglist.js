import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsAsync } from "../../redux/dogs/services";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { ListContainer } from "./Doglist.styled";
const linkStyle = {
  textDecoration: "none",
};

const Doglist = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.dogs.breeds);
  const status = useSelector((state) => state.dogs.status);
  const error = useSelector((state) => state.dogs.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getDogsAsync());
    }
  }, [dispatch, status]);

  return (
    <ListContainer>
      {status === "failed" && (
        <div>
          <span>{error.message}</span>
        </div>
      )}
      {breeds.map((item) => (
        <Link style={linkStyle} to={`/dogs/${item.id}`}>
        <Card
          key={item.id}
          photo={item.photo}
          breed={item.breed}
          origin={item.origin}
        />
        </Link>
      ))}
    </ListContainer>
  );
};

export default Doglist;
