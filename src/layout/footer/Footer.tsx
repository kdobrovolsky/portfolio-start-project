import styled from "styled-components";
import { FooterContacts } from "./FooterContacts";
// import logotip from "../../assets/images/reactLogo-svg.svg"

import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";




export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        
        {/* <FooterLogo src={logotip} alt="" /> */}
        <FooterContacts/>

        <FooterContent>
        <FooterCopyRight>
        Designed and built by <StyledText>Kirill</StyledText> with <StyledText>Love</StyledText> & <StyledText>Coffee</StyledText>
        </FooterCopyRight>
        </FooterContent>
        </Container>
    </StyledFooter>
  );
};


const StyledFooter = styled.footer `
  background-color: ${theme.colors.primaryBg};
  color: white;
  padding: 2rem 0;

    
`

const StyledText = styled.span`
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  -webkit-background-clip: text; 
  background-clip: text;
  color: transparent; 
 
`

const FooterContent = styled.div`
  display:flex;
  justify-content:center;
  text-align:center;
  flex-direction: column;
  
  &::before{
  content: '';
  width:100%;
   margin-left: -15px;
   height: 2px;
   background-color: ${theme.colors.fontText};
   margin-top: 35px;
   margin-bottom: 35px;
   opacity: 0.4;
  }

  @media ${theme.media.mobile}{
    &::before{
  content: '';
  width:100%;
   margin-left: -1px;
   height: 2px;
   background-color: ${theme.colors.fontText};
   margin-top: 25px;
   margin-bottom: 25px;
   opacity: 0.4;
    }
  }

`

const FooterCopyRight = styled.div`
  color: ${theme.colors.fontText};
    ${font({weight:400, Fmax:18 , Fmin:9  })}
    /* font-weight: 400;
    font-size: 18px; */
    line-height: 144%;
    text-align: center;

`



// const Divider = styled.div`
//  width: calc(100% + 30px); 
//   margin-left: -15px;
//   height: 2px;
//   background-color: ${theme.colors.fontText};
//   margin-top: 35px;
//   margin-bottom: 35px;
//   opacity: 0.5;
// `;