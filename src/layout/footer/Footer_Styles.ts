import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

// Footer
const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  color: white;
  padding: 2rem 0;
`;

const Text = styled.span`
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  &::before {
    content: "";
    width: 100%;
    margin-left: -15px;
    height: 2px;
    background-color: ${theme.colors.fontText};
    margin-top: 35px;
    margin-bottom: 35px;
    opacity: 0.4;
  }

  @media ${theme.media.mobile} {
    &::before {
      content: "";
      width: 100%;
      margin-left: -1px;
      height: 2px;
      background-color: ${theme.colors.fontText};
      margin-top: 25px;
      margin-bottom: 25px;
      opacity: 0.4;
    }
  }
`;

const BottomFooterText = styled.div`
  color: ${theme.colors.fontText};
  ${font({ weight: 400, Fmax: 18, Fmin: 9 })}
  line-height: 144%;
  text-align: center;
`;

// FooterContacts
const FooterContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 34px;
`;

const ContactLink = styled.a`
  ${font({ weight: 400, Fmax: 18, Fmin: 9 })}
  color: ${theme.colors.fontText};
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 34px;
  padding-top: 10px;
  @media ${theme.media.mobile} {
  display: flex;
  flex-direction: column;
  gap: 15px;
  }
`;

const Logo = styled.div`
  display: flex;
`;

const FooterLogo = styled.img``;

export const S = {
  Footer,
  Text,
  FooterContent,
  BottomFooterText,

  FooterContacts,
  ContactLink,
  Content,
  Logo,
  FooterLogo,
};
