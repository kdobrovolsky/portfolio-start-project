import styled from "styled-components";
import { Messages } from "../../components/messages/Messages";
import logotip from "../../assets/images/reactLogo-svg.svg";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const FooterContacts = () => {
  return (
    <StyledFooterContacts>
      <Logo>
        <FooterLogo src={logotip} alt="" />
      </Logo>

      <Content>
        <ContactLink href="tel:+375447392673">+375 (44) 739-26-73</ContactLink>
        <ContactLink href="mailto:kdobrovolsky02@gmail.ru">
          {" "}
          kdobrovolsky02@gmail.com
        </ContactLink>
        <Messages />
      </Content>
    </StyledFooterContacts>
  );
};

const StyledFooterContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 34px;
`;

const ContactLink = styled.a`
  ${font({ weight: 400, Fmax: 18, Fmin: 9 })}
  /* font-size: 18px; */
  color: ${theme.colors.fontText};
  /* font-weight: 400; */
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
