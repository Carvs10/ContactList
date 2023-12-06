import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: flex;
`;
export const List = styled.ul`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify
`;

export const MainContainer = styled.main`
  text-align: center;
  width: 100%;
  padding: 40px 180px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f5cca0;
`;
export const Result = styled.h2`
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
`;

export const Field = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #fff;
  width: 680px;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const SaveButton = styled(Button)`
  background-color: #44bd32;
`;

export default GlobalStyles;
