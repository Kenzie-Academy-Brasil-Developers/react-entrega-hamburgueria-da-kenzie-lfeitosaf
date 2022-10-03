import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid red;
  min-width: 300px;
  height: 355px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  background: #f5f5f5;

  img {
    object-fit: cover;
  }
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 21px;
  gap: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  font-family: "Inter";
  color: #333333;
`;

export const Category = styled.span`
  font-family: "Inter";
  color: #828282;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const Price = styled.h3`
  font-family: "Inter";
  color: #27ae60;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
  width: 106px;
  height: 40px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
