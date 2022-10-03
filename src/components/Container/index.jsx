import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 41px;
    margin-right: 115px;
    margin-left: 115px;
  }
`;
