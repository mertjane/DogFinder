import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsAsync } from "../../redux/dogs/services";
import { Link } from "react-router-dom";
import {
  Wrapper,
  SearchWrapper,
  ListWrapper,
  SearchInput,
  Button,
} from "./Doglist.styled";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../Card/Card";
import BacktoTopButton from "../BackToTopButton/BacktoTopButton";

const linkStyle = {
  textDecoration: "none",
};
const iconStyle = {
  backgroundColor: "white",
  height: "100%",
  color: "lightGrey",
  width: "50px",
  paddingLeft: "8px",
};

const Doglist = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.dogs.breeds);
  const status = useSelector((state) => state.dogs.status);
  const error = useSelector((state) => state.dogs.error);
  const [query, setQuery] = useState("");
  const queryRegex = /[-!$%^&*()_+|~=`{}/:";'<>?,.0-9+$+\s]/;
  //console.log(breeds.filter(item => item.breed.toLowerCase().includes(query)));

  useEffect(() => {
    if (status === "idle") {
      dispatch(getDogsAsync());
    }
  }, [dispatch, status]);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="search by breed"
        />
        <Button disabled>
          <AiOutlineSearch style={iconStyle} />
        </Button>
      </SearchWrapper>
      <ListWrapper>
        {status === "failed" && (
          <div>
            <span>{error}</span>
          </div>
        )}
        {queryRegex.test(query) && (
          <div>
            <span>Please enter valid text format!</span>
          </div>
        )}
        {breeds
          .filter((item) => item.breed.toLowerCase().includes(query))
          .map((item) => (
            <Link key={item.id} style={linkStyle} to={`/dogs/${item.id}`}>
              <Card
                photo={item.photo}
                breed={item.breed}
                origin={item.origin}
              />
            </Link>
          ))}
      </ListWrapper>
      <BacktoTopButton />
    </Wrapper>
  );
};

export default Doglist;
