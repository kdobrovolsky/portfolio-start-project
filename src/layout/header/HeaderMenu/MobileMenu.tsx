import { useState } from "react";
import { S } from "./HeaderMenu_Styles";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Закрываем меню после клика
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuWrapper $isOpen={isOpen}>
        <ul>
          {props.menuItems.map((item, index) => (
            <S.DesktopListItem key={index}>
              <S.DesktopLink 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </S.DesktopLink>
            </S.DesktopListItem>
          ))}
        </ul>
      </S.MobileMenuWrapper>
    </S.MobileMenu>
  );
};

