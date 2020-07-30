import styled, { css } from "styled-components";

import { addAlpha } from "utils/addAlpha";

export const Button = styled.button`
  align-items: center;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-size: 16px;
  line-height: 22px;
  justify-content: space-between;
  padding: 11px 16px;

  ${({ $variant }) => {
    switch ($variant) {
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.gray1};
          color: ${({ theme }) => theme.colors.gray9};
          :hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.gray2};
          }
          :focus {
            background-color: ${({ theme }) => theme.colors.gray0};
            border: 1px solid ${({ theme }) => theme.colors.gray2};
            outline: none;
          }
          :disabled {
            color: ${({ theme }) => theme.colors.gray6};
          }
        `;

      case "light":
        return css`
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => addAlpha(theme.colors.white, 0.1)};
          :hover:not(:disabled) {
            background-color: ${({ theme }) =>
              addAlpha(theme.colors.white, 0.2)};
          }
          :focus {
            background-color: ${({ theme }) =>
              addAlpha(theme.colors.white, 0.1)};
            border: 1px solid
              ${({ theme }) => addAlpha(theme.colors.white, 0.2)};
            outline: none;
          }
          :disabled {
            color: ${({ theme }) => addAlpha(theme.colors.white, 0.4)};
          }
        `;
      case "link":
        return css`
          background: none;
          padding: 0;
          border: none;
          color: ${({ theme }) => theme.colors.royalBlue};

          :hover:not(:disabled) {
            color: ${({ theme }) => theme.colors.governorBay};
          }

          :focus {
            outline: none;
            color: ${({ theme }) => theme.colors.dullLavender};
          }
          :disabled {
            color: ${({ theme }) => addAlpha(theme.colors.royalBlue, 0.5)};
          }
        `;
      case "primary":
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.royalBlue};
          color: ${({ theme }) => theme.colors.white};
          :hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.governorBay};
          }
          :focus {
            background-color: ${({ theme }) => theme.colors.dullLavender};
            border: 1px solid ${({ theme }) => theme.colors.royalBlue};
            outline: none;
          }
          :disabled {
            background-color: ${({ theme }) =>
              addAlpha(theme.colors.royalBlue, 0.1)};
            color: ${({ theme }) => addAlpha(theme.colors.royalBlue, 0.4)};
          }
        `;
    }
  }}

  ${({ $iconPosition }) =>
    $iconPosition === "right" &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ $size }) =>
    $size === "small" &&
    css`
      font-size: 14px;
      line-height: 20px;
      padding: 9px 16px;
    `}
`;

export const IconWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;

  ${({ $position }) =>
    $position === "right" &&
    css`
      margin-left: 12px;
      margin-right: 0;
    `}
`;
