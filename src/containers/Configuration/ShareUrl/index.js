import React, { useMemo } from "react";
import { useFormikContext } from "formik";
import useClipboard from "react-use-clipboard";
import { QRCode } from "react-qrcode-logo";

import Button from "components/Button";

import { Container } from "./styles";

export const ShareUrl = () => {
  const { values } = useFormikContext();
  const shareUrl = useMemo(
    () =>
      `https://recipes-twitch.netlify.app/configuracion?appId=${values?.appId}&apiToken=${values?.apiToken}`,
    [values]
  );
  const [isCopied, setCopied] = useClipboard(shareUrl);

  return (
    <Container>
      <QRCode
        value={shareUrl}
        size={250}
        fgColor="#77b255"
        qrStyle="dots"
        logoImage="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/carrot_1f955.png"
      />
      <Button type="button" onClick={setCopied}>
        {isCopied ? "URL copiada 👍" : "Copiar URL"}
      </Button>
    </Container>
  );
};
