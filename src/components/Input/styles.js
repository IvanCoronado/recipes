import styled, { css } from "styled-components";

import { ReactComponent as ErrorIcon } from "assets/images/icons/error.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 20px;
`;

export const BaseInput = styled.input`
  background-color: ${({ theme }) => theme.colors.gray0};
  border: 1px solid ${({ theme }) => theme.colors.gray8};
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
  padding: 11px 30px 11px 12px;
  width: 100%;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  :hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.gray1};
  }

  :disabled {
    border-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.gray8};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.royalBlue};
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.burningOrange};
    `}
`;
export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Error = styled.span`
  margin-top: 8px;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.burningOrange};
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const IconError = styled(ErrorIcon)`
  color: ${({ theme }) => theme.colors.burningOrange};
`;
export const IconContainer = styled.div`
  color: ${({ theme }) => theme.colors.gray8};
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
`;
