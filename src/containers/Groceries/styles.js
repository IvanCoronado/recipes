import styled from "styled-components";
import { H1 } from "components/Typography";

export const Container = styled.div`
  min-height: calc(100% - 45px);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled(H1)`
  padding: 0 16px;
`;

export const Column = styled.div`
  flex: 1;
  overflow-y: auto;
`;
