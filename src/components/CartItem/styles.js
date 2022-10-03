import styled from "styled-components";

export const CartItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  background: #f5f5f5;
  padding: 5px;
`;

export const CardImg = styled.img`
  width: 70px;
  height: 70px;
  background-color: #e0e0e0;
  border-radius: 5px;
`;

export const DivImgTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DivTitles = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

export const CartItemTitle = styled.h2`
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;

export const CartItemSpan = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
`;

export const CartItemButton = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-top: 13px;
  color: #bdbdbd;
  :hover {
    cursor: pointer;
  }
`;

export const CartQuantity = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
`;
