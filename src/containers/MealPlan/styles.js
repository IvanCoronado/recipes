import styled from "styled-components";
import Button from "components/Button";

export const Column = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const FloatingButton = styled(Button)`
  position: absolute;
  bottom: 61px;
  left: 50%;
  transform: translateX(-50%);
`;

export const AddButton = styled(Button)`
  width: calc(100% - 32px);
  margin: 32px 16px 16px;
  justify-content: center;
`;
