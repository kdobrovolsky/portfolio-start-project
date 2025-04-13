
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
      <StyledTitleSlogan>For any questions please mail me:</StyledTitleSlogan>
      <StyledTextSlogan href="mailto:kdobrovolsky02@gmail.ru"> kdobrovolsky02@gmail.com</StyledTextSlogan>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
    background-color: ${theme.colors.primaryBg};
    display:flex;
    justify-content:center;
    align-items:center;

`

const StyledTitleSlogan= styled.h2`
${font({weight:700, Fmax:58 , Fmin:18  })}
font-family: "DM Sans", sans-serif;
/* font-weight: 700;
font-size: 58px; */
letter-spacing: -0.02em;
text-align: center;
color: ${theme.colors.fontTitle};

 
`

const StyledTextSlogan = styled.a`
${font({weight:700, Fmax:58 , Fmin:18  })}
font-family: "DM Sans", sans-serif;
/* font-weight: 700;
font-size: 58px; */
line-height: 121%;
letter-spacing: -0.02em;
text-align: center;
background: ${theme.colors.accent};
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display:block;
text-align:center;

`