import styled from "styled-components";

import { ReactComponent as Back } from "assets/images/icons/arrowLeft.svg";
import { ReactComponent as Remove } from "assets/images/icons/cross.svg";
import { AppContainer } from "components/Layout";
import DefaultButton from "components/Button";

export const Container = styled(AppContainer)``;

export const IconButton = styled(DefaultButton)``;

export const PrevIcon = styled(Back)`
  width: 16px;
`;

export const ExitIcon = styled(Remove)`
  width: 14px;
  height: 14px;
`;
