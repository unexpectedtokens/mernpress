import React from "react";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searchcont = styled.div`
  float: right;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Searchicon = styled.p`
  font-size: 2em;
  margin-top: 30%;
  a {
    color: gray;
    transition: color 0.3s;
  }
  a:hover {
    color: #000;
  }
`;
const Search = props => {
  return (
    <Searchcont>
      <Searchicon>
        <Link to="/search">
          <IoMdSearch />
        </Link>
      </Searchicon>
    </Searchcont>
  );
};
export default Search;
