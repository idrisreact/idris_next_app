import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const HeaderStyled = styled.div`
  min-height: 50px;
  border-bottom: 1px solid #ffffff72;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 5vh;
`;

const HeaderLinks = styled.a`
  display: flex;
  color: white;
  a {
    margin-right: 10px;
    text-decoration: none;
  }
`;

const HeaderLink = styled(Link)`
  color: #ffffff;
  &:hover {
    color: "#FC7A57";
  }
`;

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <HeaderStyled>
        <HeaderLinks>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/contact">Contact</HeaderLink>
        </HeaderLinks>
      </HeaderStyled>
      {children}
    </>
  );
};

export default Header;
