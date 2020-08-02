import React, { memo } from "react";

import { Input, Label, LabelText } from "./styles";

const Checkbox = ({ label, className, checked, ...props }) => {
  return (
    <Label className={className}>
      <Input type="checkbox" checked={checked} {...props} />
      <LabelText checked={checked}>{label}</LabelText>
    </Label>
  );
};

export default memo(Checkbox);
