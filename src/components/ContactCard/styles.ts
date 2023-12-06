import styled from "styled-components";
import { Button } from "../../styles";

export const Card = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  border-radius: 16px;
  gap: 16px;
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Actions = styled.div`
  border-top: 1px solid rgba(0,0,0, 0.1)
  padding-top: 16px;
`;

export const CancelButton = styled(Button)`
  background-color: #c23616;
`;
