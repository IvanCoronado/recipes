import styled, { css } from "styled-components";
import { Body } from "components/Typography";
import DefaultButton from "components/Button";

import { FiTrash2, FiCheckCircle, FiCircle } from "react-icons/fi";

export const Container = styled.div`
  position: relative;

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `}
`;

export const Img = styled.img`
  width: 100%;
  height: var(--recipe-image-height);
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 4px;
  background-color: ${({ theme }) => theme.colors.gray4};
  border: 0.5px solid ${({ theme }) => theme.colors.gray4};

  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(100%);
    `}
`;

export const Name = styled(Body)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ActionButton = styled(DefaultButton)`
  border-radius: 32px;
  width: 32px;
  height: 32px;
  padding: 0;
  text-align: center;
  position: absolute;
  top: 6px;
  right: 6px;
`;

export const RemoveIcon = styled(FiTrash2)`
  margin: 0 auto;
`;

export const CheckIcon = styled(FiCheckCircle)`
  margin: 0 auto;
`;

export const UncheckIcon = styled(FiCircle)`
  margin: 0 auto;
`;
