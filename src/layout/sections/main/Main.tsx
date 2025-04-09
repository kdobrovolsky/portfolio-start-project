
import styled from "styled-components";
import photo from "../../../assets/images/mainPhoto2.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
      <FlexWrapper $align="center" $justify="space-between">
        <MainContent>
          <SmallText>Hi there!👋</SmallText>
          <NameTitle>I'm Kirill</NameTitle>
          <MainTitle>I Web Developer</MainTitle>
          <MainText>
            I engineer immersive digital experiences where innovation harmonizes with aesthetics
          </MainText>
        </MainContent>
        <PhotoWrapper>
        <Photo src={photo}/>
        </PhotoWrapper>
      </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const Photo = styled.img`
  max-width: 554px;
  max-height: 562px;
  object-fit: cover;
  padding:20px
`;

const MainContent = styled.div`
  
`

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
  display:flex;
`;

const MainTitle = styled.h1`
  display:flex;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: -0.02em;
  color: ${theme.colors.fontTextAdditional};
`;

const SmallText = styled.span`
display:flex;
font-weight: 700;
font-size: 48px;
letter-spacing: -0.02em;
color: ${theme.colors.fontTextAdditional};
`

const NameTitle = styled.span`
display:flex;
margin:10px 0px ;
font-weight: 700;
font-size: 48px;
letter-spacing: -0.02em;
color: ${theme.colors.fontTextAdditional};
background: ${theme.colors.accent};
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const MainText = styled.p`
  display: block;
  font-weight: 500;
  font-size: 30px;
  color: #bcbcbc;
  max-width: 693px;
  max-height: 93px;
  text-align: left;
  margin-top: 30px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  &::before{
    content: '';
    width:392px;
    height: 574px;
    border: 5px solid  ;
    border-image: ${theme.colors.accent} 1;
    position:absolute;
    top: -6px;
    left: 36px;
    z-index:-1;
    
  }
`


/* const StyledButton = styled.button`
  margin-top:40px;
  min-width: 200px;
  min-height: 55px;
  border-radius: 10px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  font-weight: 600;
  font-size: 20px;
   color: white;
`; */