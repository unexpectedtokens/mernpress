import styled from "styled-components";

const Searchcont = styled.div`
  width: 80%;
  margin: 100px 10% 0 10%;
  padding-bottom: 100px;
  div {
    margin: 100px 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Searchbar = styled.input`
  width: 70%;
  margin-left: 15%;
  margin-top: 10%;
  margin-bottom: 100px;
  border: none;
  border-bottom: 2px solid #555;
  font-size: 2em;
  color: #555;
  padding: 10px;
  :focus {
    outline: none;
    border-bottom: 2px solid #000;
  }
`;
const Errormessage = styled.p`
  font-size: 1.5em;
  text-align: center;
`;

export { Searchbar, Searchcont, Errormessage };
