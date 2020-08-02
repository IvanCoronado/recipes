import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: none;
  outline: 0;
`;
