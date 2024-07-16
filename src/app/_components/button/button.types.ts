import { ButtonHTMLAttributes } from "react";
import { BaseComponents } from "../types/base-components.types";
import { LoadingBehavior } from "../types/loading.types";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseComponents &
  LoadingBehavior & {
    isOutline?: boolean;
    isAnimated?: boolean;
    isLink?: boolean;
    buttonType?: ButtonType;
  };

export type ButtonType = "rounded" | "normal" | "full";
