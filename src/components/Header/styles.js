import styled from "styled-components";

import { Subtitle } from "components/Typography";

export const Container = styled.header`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
`;

export const Title = styled(Subtitle)``;

export const IconWwrapper = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
