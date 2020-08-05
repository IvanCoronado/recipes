import styled from "styled-components";
import DefaultButton from "components/Button";
import { BodyMedium } from "components/Typography";

export const Container = styled.div`
  margin-bottom: 8px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 8px 16px;
`;

export const Title = styled(BodyMedium)``;

export const Remove = styled(DefaultButton)``;

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
