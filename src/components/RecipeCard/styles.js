import styled, { css } from "styled-components";
import { Body } from "components/Typography";

export const Container = styled.div`
  min-width: 120px;

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `}
`;

export const Img = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 4px;
  background-color: ${({ theme }) => theme.colors.gray4};
  border: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;

export const Name = styled(Body)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
