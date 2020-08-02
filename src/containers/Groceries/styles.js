import styled from "styled-components";
import { Overline } from "components/Typography";

export const Section = styled.div`
  padding: 16px;

  > * {
    margin-bottom: 8px;
  }
`;

export const SectionTitle = styled(Overline)`
  display: inline-block;
`;
