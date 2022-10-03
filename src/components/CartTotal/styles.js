import styled from "styled-components";

export const CartTotalDivPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartTotalDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: auto;
  gap: 20px;
`;

export const CartTotalH3 = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #333333;
`;

export const CartTotalPrice = styled.span`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #828282;
`;

export const CartTotalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  height: 60px;
  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
`;
