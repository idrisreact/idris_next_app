"use client";
import React, { FC } from "react";
import styled, { css } from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  ${(props) => css`
    @media (min-width: 768px) {
      max-width: 80%;
    }

    @media (min-width: 1024px) {
      max-width: 60%;
    }
  `}
`;
export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
