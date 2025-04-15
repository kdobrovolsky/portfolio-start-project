import { useState } from "react";
import { S } from "./HeaderMenu_Styles";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.StyledMobileMenu>
      <S.BurgerButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuWrapper $isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <S.DesktopListItem key={index}>
                <S.DesktopLink href="">{item}</S.DesktopLink>
              </S.DesktopListItem>
            );
          })}
        </ul>
      </S.MobileMenuWrapper>
    </S.StyledMobileMenu>
  );
};


