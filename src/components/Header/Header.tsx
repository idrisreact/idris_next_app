import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const HeaderStyled = styled.header`
  min-height: 50px;
  border-bottom: 1px solid #ffffff72;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 5vh;
`;

const HeaderLinks = styled.div`
  display: flex;
  a {
    margin-right: 10px;
    text-decoration: none;
  }
`;

const HeaderLink = styled.a`
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
          <Link href="/">
            <HeaderLink>Home</HeaderLink>
          </Link>
          <Link href="/contact">
            <HeaderLink>contact</HeaderLink>
          </Link>
          <Link href="/socials">
            <HeaderLink>socials</HeaderLink>
          </Link>
        </HeaderLinks>
      </HeaderStyled>
      {children}
    </>
  );
};

export default Header;
