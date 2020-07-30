import styled from "styled-components";
import { H4 } from "components/Typography";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 8px;
`;

export const Title = styled(H4)`
  padding: 16px;
`;

export const ScrolledRow = styled.div`
  display: flex;
  overflow-x: auto;

  > * {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    margin-right: 8px;
    background-color: white;
  }
`;
