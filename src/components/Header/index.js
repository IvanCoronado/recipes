import React from "react";

import { Container, Title, IconWwrapper } from "./styles";

const Header = ({ title, left, right }) => {
  return (
    <Container>
      <IconWwrapper>{left}</IconWwrapper>
      <Title>{title}</Title>
      <IconWwrapper>{right}</IconWwrapper>
    </Container>
  );
};

export default Header;
