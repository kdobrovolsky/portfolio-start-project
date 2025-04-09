import styled from "styled-components";
import { Messages } from "../../components/messages/Messages";
import logotip from "../../assets/images/reactLogo-svg.svg"
import { theme } from "../../styles/Theme";

export const FooterContacts = () => {
  return (
    <StyledFooterContacts>
      <Logo>
      <FooterLogo src={logotip} alt="" />
      </Logo>
        
      <Content>
      <ContactLink href="tel:+375447392673">+375 (44) 739-26-73</ContactLink>
      <ContactLink href="mailto:kdobrovolsky02@gmail.ru"> kdobrovolsky02@gmail.com</ContactLink>
      <Messages/>
      </Content>
      
    </StyledFooterContacts>
  );
};


const StyledFooterContacts = styled.div`
     display: flex;
  justify-content: space-between; 
  align-items: center; 
  width: 100%; 
  gap: 33px;
  
`

const ContactLink = styled.a`
  font-size: 18px;
  color: ${theme.colors.fontText};
  font-weight: 400;
  text-decoration: none;

  
 
`

const Content = styled.div`
  display:flex;
  justify-content:flex-end;
  gap:33px;
  padding-top:10px;
`

const Logo = styled.div`
  display:flex;
 
`


const FooterLogo = styled.img`

`



