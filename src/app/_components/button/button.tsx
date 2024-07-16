import { Size } from "../types/size.types";
import { ButtonProps, ButtonType } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "btn-md",
  large: "btn-lg",
};

const buttonTypeClasses: Record<ButtonType, string> = {
  rounded: "btn-rounded",
  normal: "btn-normal",
  full: "btn-full",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  isDisable = false,
  isOutline = false,
  isLink = false,
  isAnimated = false,
  isLoading = false,
  loadingText = "Loading...",
  type = "button",
  children,
  buttonType = "normal",
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${buttonTypeClasses[buttonType]}`]: buttonType },
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "pointer-events-none opacity-80": isLoading }
  );
  return (
    <button className={classes} type={type} disabled={isDisable} {...rest}>
      {isLoading && <div>{loadingText}</div>}
      {isLoading ? loadingText : children}
    </button>
  );
};
