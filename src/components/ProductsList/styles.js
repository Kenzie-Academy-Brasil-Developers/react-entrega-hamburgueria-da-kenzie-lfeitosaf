import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 2rem;
  width: 100%;
  list-style: none;
  min-height: 370px;
  @media (min-width: 768px) {
    overflow: none;
    flex-wrap: wrap;
    width: 68%;
  }
`;
