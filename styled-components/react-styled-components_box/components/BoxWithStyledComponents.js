import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  ${({ $isBlack }) => {
    if ($isBlack) {
      return "background-color: black;";
    }
  }}

  &:hover {
    background-color: red;
  }
`;
export default StyledBox;
