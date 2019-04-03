import styled from "styled-components";

export default styled.div`
  width: 100%;
  box-shadow: -1px 2px 2px #555;
  padding: 5px 100px;
  position: fixed;
  top: 0%;
  background: #fefefe;
  z-index: 500;
  @media (max-width: 800px) {
    padding: 7px;
  }
`;
