import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { addAlpha } from "utils/addAlpha";

export const Tabs = styled.div`
  width: 100%;
  margin-top: auto;
  height: 45px;
  background-color: lightslategray;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Tab = styled(NavLink).attrs(() => ({
  activeClassName: "selected",
}))`
  color: ${({ theme }) => addAlpha(theme.colors.white, 0.5)};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &.selected {
    color: ${({ theme }) => theme.colors.white};
  }
`;
