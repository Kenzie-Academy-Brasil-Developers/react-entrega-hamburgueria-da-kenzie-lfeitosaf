import styled from "styled-components";

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 223px;
  padding: 50px 10px;
  @media (min-width: 900px) {
    margin-bottom: auto;
    width: 365px;
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
  padding: 50px 10px;
  width: 100%;
  min-height: 158px;
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

export const CartWarning = styled.h2`
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #333333;
`;

export const CartAddSpan = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #828282;
`;
