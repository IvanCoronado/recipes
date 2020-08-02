import Dialog from "@material-ui/core/Dialog";
import React from "react";

import Header from "components/Header";
import { VerticalScroll } from "components/Layout";

import { IconButton, Container, ExitIcon } from "./styles";

export const FullScreenModal = ({
  title,
  handleClose,
  open,
  children,
  goBack,
  goBackHide,
  ...props
}) => {
  return (
    <Dialog fullScreen open={open} {...props} onClose={handleClose}>
      <Container>
        <Header
          title={title}
          left={
            <IconButton
              onClick={handleClose}
              variant="link"
              icon={<ExitIcon />}
            />
          }
        />
        <VerticalScroll>{children}</VerticalScroll>
      </Container>
    </Dialog>
  );
};
