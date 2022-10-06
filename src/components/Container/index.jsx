import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  @media (min-width: 900px) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 41px;
    margin-right: 115px;
    margin-left: 115px;
  }
`;
