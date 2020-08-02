import styled, { css } from "styled-components";

import { Subtitle } from "components/Typography";

export const Input = styled.input`
  appearance: none;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.colors.gray4};
  outline: none;
  position: relative;
  cursor: pointer;

  :checked {
    border-color: ${({ theme }) => theme.colors.darkBlueCorporate};
    background-color: ${({ theme }) => theme.colors.white};

    :after {
      background-color: ${({ theme }) => theme.colors.darkBlueCorporate};
      border-radius: 1px;
      content: "";
      height: 26px;
      width: 26px;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(-2px) translateY(2px);
    }
  }
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const LabelText = styled(Subtitle)`
  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
    `}
`;
