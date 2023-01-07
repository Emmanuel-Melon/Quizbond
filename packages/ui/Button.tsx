import React, { FC } from "react";
import { Button as ButtonBase, ScaleFade } from "@chakra-ui/react";

type ButtonProps = {
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  icon?: any;
  bg?: string;
  loadingText?: string;
  isLoading?: boolean;
  width?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  isLoading = false,
  loadingText,
  disabled = false,
  size = "md",
  width = "100%",
}) => {

  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ButtonBase
        onClick={onClick}
        isLoading={isLoading}
        loadingText={loadingText}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        px={4}
        width={width}
        size={size}
        borderRadius="0.5rem"
        disabled={disabled}
        cursor="pointer"
      >
        {children}
      </ButtonBase>
    </ScaleFade>
  );
};