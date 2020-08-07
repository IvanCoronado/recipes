import styled from "styled-components";
import { VerticalScroll as BaseVerticalScroll } from "components/Layout";

export const VerticalScroll = styled(BaseVerticalScroll)`
  padding: 16px;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;

    > button {
      align-self: flex-start;
    }
  }
`;

export const Link = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: ${({ theme }) => theme.colors.dark};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 16px;
`;
