import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";

interface TextProps extends HTMLAttributes<HTMLElement> {
  type: "h1" | "h2" | "h3" | "default";
  children: React.ReactNode;
}

export const Text: FC<TextProps> = ({
  type = "default",
  className,
  children,
  ...rest
}) => {
  let Element = "p";

  switch (type) {
    case "h1":
      className = `text-4xl font-bold ${className || ""}`;

      return (
        <h1 className={className} {...rest}>
          {children}
        </h1>
      );

    case "h2":
      Element = "h2";
      className = `text-3xl font-bold ${className || ""}`;
      return (
        <h2 className={className} {...rest}>
          {children}
        </h2>
      );

    case "h3":
      Element = "h3";
      className = `text-2xl font-bold ${className || ""}`;
      return (
        <h3 className={className} {...rest}>
          {children}
        </h3>
      );
    default:
      return (
        <p className={className} {...rest}>
          {children}
        </p>
      );
  }
};
