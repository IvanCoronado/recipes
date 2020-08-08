import styled from "styled-components";
import Button from "components/Button";

export const FloatingButton = styled(Button)`
  position: absolute;
  bottom: 61px;
  right: 16px;
`;

export const AddButton = styled(Button)`
  width: calc(100% - 32px);
  margin: 32px 16px 16px;
  justify-content: center;
`;
