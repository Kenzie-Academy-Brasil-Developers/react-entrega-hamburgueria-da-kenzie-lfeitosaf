import styled from "styled-components";

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 10px;
  @media (min-width: 768px) {
    width: 365px;
    margin-bottom: auto;
    height: 530px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  min-height: 65px;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 470px;
  border-radius: 0px 0px 5px 5px;
  background: #f5f5f5;
`;

export const CartTitle = styled.h2`
  display: flex;
  align-items: center;
  font-family: "Inter";
  margin-left: 21px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const CartList = styled.ul`
  display: flex;
  width: 100%;
  max-height: 270px;
  flex-direction: column;
  overflow: auto;
  border-bottom: solid 2px #e0e0e0;
  gap: 10px;
`;
