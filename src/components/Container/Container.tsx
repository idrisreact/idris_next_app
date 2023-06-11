"use client";
import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 max-w-screen-lg">{children}</div>
  );
};
