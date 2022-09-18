import React from "react";
import { ClipLoader } from "react-spinners";
import { Wrapper, LoadBtn } from "./Paginate.styled";
import { useDispatch, useSelector } from "react-redux";
import { getDogsAsync } from "../../redux/dogs/services";

const Paginate = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector((state) => state.dogs.hasNextPage);
  const page = useSelector((state) => state.dogs.page);
  const status = useSelector((state) => state.dogs.status);

  return (
    <Wrapper>
      {status === "loading" && <ClipLoader color="#6a6af5" size={35} />}
      {hasNextPage && status !== "loading" && (
        <LoadBtn onClick={() => dispatch(getDogsAsync(page))}>
          Load more ({page})
        </LoadBtn>
      )}
      {!hasNextPage &&(
        <div>
          <span>There is nothing to be shown.</span>
        </div>
      )}
    </Wrapper>
  );
};

export default Paginate;
