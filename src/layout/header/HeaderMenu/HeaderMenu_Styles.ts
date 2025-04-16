import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"
// DesktopMenu
const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 67px;
  }
 padding: 8px 0px 25px 0px;

 @media ${theme.media.tablet}{
  display:none;
  
 }

 @media ${theme.media.mobile}{
  display:none;
 }

 `

const DesktopListItem = styled.li`
font-family: var(--second-family);
font-size: 20px;
text-align: center;
color: ${theme.colors.fontText};
transition: 0.5s;
&:hover{
  transform: scale(1.2);
}

`


const DesktopLink = styled.a`
color: ${theme.colors.fontText};
`

const MenuItem = styled.ul`
  
`

// MobileMenu
const StyledMobileMenu = styled.div`
  
`

const MobileMenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9998;
  background-color: rgba(34, 28, 28, 0.81);
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

  @media ${theme.media.mobile} {
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

const MobileListItem = styled.li`
  font-family: var(--second-family);
  font-size: 30px;
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

const MobileLink = styled.a`
  color: ${theme.colors.fontText};
  text-decoration: none;
`;



export const S = {
    DesktopLink,
    DesktopListItem,
    StyledMenu,
    MenuItem,
    BurgerButton,
    MobileMenuWrapper,
    StyledMobileMenu,
    MobileListItem,
    MobileLink,
}