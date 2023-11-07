"use client";
import Logo from "../logo/Logo";
import { ElementHeader, HeaderContainer } from "./Header.style";

export const Header = () => {
  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    </ElementHeader>
  );
};
