import React from 'react'
import { SearchWrapper, SearchInput, Button } from './Search.styled'
import { AiOutlineSearch } from "react-icons/ai";

const iconStyle = {
    backgroundColor: "white",
    height: "100%",
    color: "lightGrey",
    width: "50px",
    paddingLeft: "8px",
  };

const Search = () => {
  return (
    <SearchWrapper>
        <SearchInput type="text" placeholder="search by breed" />
        <Button><AiOutlineSearch style={iconStyle} /></Button>
    </SearchWrapper>
  )
}

export default Search