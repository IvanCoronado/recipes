import styled from "styled-components";
import { BodyMedium } from "components/Typography";

export const Container = styled.div`
  margin-bottom: 8px;
`;

export const Title = styled(BodyMedium)`
  padding: 16px 16px 8px 16px;
`;

export const ScrolledRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    width: 120px;
    flex: 0 0 auto;
    margin-left: 16px;
  }

  > button {
    width: 120px;
    height: 120px;
    flex: 0 0 auto;
    margin-left: 16px;
  }
`;
