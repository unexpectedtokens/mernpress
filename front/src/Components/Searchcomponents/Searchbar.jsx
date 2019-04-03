import styled from "styled-components";

const Searchcont = styled.div`
  width: 80%;

  margin: 100px 10%;
  min-height: 60vh;
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Searchbar = styled.input`
  width: 70%;
  margin-left: 15%;
  margin-top: 10%;
  border: none;
  border-bottom: 2px solid #555;
  font-size: 2em;
  color: #555;
  :focus {
    color: #000;
    outline: none;
    border-bottom: 2px solid #3e3e3e;
  }
`;

export { Searchbar, Searchcont };
