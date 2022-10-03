import styled from "styled-components";

export const Menu = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #f5f5f5;
  height: 139px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 16px;
  gap: 15px;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 22.85px;
  @media (min-width: 768px) {
    margin-left: 115px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border: 2px solid #e0e0e0;
  background-color: #fff;
  border-radius: 8px;
  :hover {
    border: 2px solid #333333;
  }
  margin: 0px 16px;
  @media (min-width: 768px) {
    width: 365px;
    margin-right: 115px;
  }
`;

export const InputSearch = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 0px 20px;
  height: 60px;
  border: 2px solid transparent;
  outline: none;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #e0e0e0;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 107px;
  padding: 0px 20px;
  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
  margin-right: 10px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-family: "Inter";
  :hover {
    background: #93d7af;
    border: 2px solid #93d7af;
  }
`;
