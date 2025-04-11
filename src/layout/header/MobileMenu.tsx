import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { useState } from "react";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </BurgerButton>

      <MobileMenuWrapper $isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="">{item}</Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuWrapper>
    </>
  );
};


const MobileMenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9998;
  background-color: rgba(34, 28, 28, 0.95);
  backdrop-filter: blur(5px);
  display: none;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${props => props.$isOpen && css`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const BurgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  z-index: 9999;
  background: transparent;
  border: none;
  cursor: pointer;

  @media ${theme.media.tablet} {
    display: block;
  }

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fontText};
    position: absolute;
    left: 7px;
    top: 24px;
    transition: all 0.3s ease;

    ${props => props.$isOpen && css`
      background-color: transparent;
    `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fontText};
      position: absolute;
      transform: translateY(-10px);
      transition: all 0.3s ease;

      ${props => props.$isOpen && css`
        transform: rotate(45deg) translateY(0);
        top: 0;
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fontText};
      position: absolute;
      transform: translateY(10px);
      transition: all 0.3s ease;

      ${props => props.$isOpen && css`
        transform: rotate(-45deg) translateY(0);
        top: 0;
      `}
    }
  }
`;

const ListItem = styled.li`
  font-family: var(--second-family);
  font-size: 20px;
  text-align: center;
  color: ${theme.colors.fontText};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media ${theme.media.mobile} {
    font-size: 18px;
  }
`;

const Link = styled.a`
  color: ${theme.colors.fontText};
  text-decoration: none;
`;














