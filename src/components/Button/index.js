import React from "react";

import { IconWrapper, Button as StyledButton } from "./styles";

/*
  iconPosition?: 'left' | 'right'
  icon?: ReactNode
  variant?: 'primary' | 'secondary' | 'light' | 'link'
  size?: 'small' | 'big'
*/

const Button = ({
  children,
  iconPosition = "left",
  icon,
  variant,
  size = "big",
  ...props
}) => (
  <StyledButton
    $iconPosition={iconPosition}
    $variant={variant}
    $size={size}
    {...props}
  >
    {!!icon && <IconWrapper $position={iconPosition}>{icon}</IconWrapper>}
    {children}
  </StyledButton>
);

export default Button;
