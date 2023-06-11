"use client";

import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  isPrimary: boolean;
  children: React.ReactNode;
};

const CtaButton = styled.button<Pick<ButtonProps, "isPrimary">>`
  background-color: ${(props) => (props.isPrimary ? "#E3B23C" : "#423E37")};
  color: ${(props) => (props.isPrimary ? "#423E37" : "#E3B23C")};
  border: none; //
  padding: 8px 6px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button: FC<ButtonProps> = (props) => {
  const { children, isPrimary } = props;
  return (
    <CtaButton {...props} isPrimary={isPrimary}>
      {children}
    </CtaButton>
  );
};
