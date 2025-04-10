import styled from "styled-components";
import { AboutExperience } from "./AboutExperience";
import { Container } from "../../../components/Container";
import { AboutEducation } from "./AboutEducation";
import { theme } from "../../../styles/Theme";
import aboutDecor from '../../../assets/images/aboutDecor.svg'
import { FlexWrapper } from "../../../components/FlexWrapper";


export const About = () => {
  return (
    <StyledAbout>
       <Container>
        <FlexWrapper>
        <Content>
       
      <StyledTitleAbout>About Me</StyledTitleAbout>
        <StyledTitleDescription>
            The Generator App is an online tool that helps you to export 
            ready-made templates ready to work as your future website. It helps you to combine slides, 
            panels and other components and export it as a set of static files: HTML/CSS/JS.
            </StyledTitleDescription>
           

            <Experience >
            <StyledSubtitle>Work Experience</StyledSubtitle>
            <AboutExperience/>
            </Experience >

            <Education>
            <StyledSubtitle>Education</StyledSubtitle>
            <AboutEducation/>
            </Education>
            </Content>

            <AboutDecoration>
              <AboutImageDecotarion src={aboutDecor} alt="" />
            </AboutDecoration>
            </FlexWrapper>
            </Container>       
    </StyledAbout>
  );
};


const StyledAbout = styled.section`
    background-color: ${theme.colors.primaryBg};
    display:flex;
    justify-content:space-between
`

const StyledSubtitle = styled.h3`
 font-weight: 700;
font-size: 42px;
line-height: 124%;
letter-spacing: -0.01em;
color: ${theme.colors.fontTitle};
margin-bottom:40px
`


const StyledTitleAbout = styled.h2`
  font-weight: 700;
font-size: 42px;
line-height: 124%;
letter-spacing: -0.01em;
color: ${theme.colors.fontTitle};
margin-bottom:40px
`

const StyledTitleDescription = styled.p`
display:block;  
font-size: 18px;
line-height: 144%;
color: ${theme.colors.fontText};
margin-bottom:38px;
max-width:708px;
max-height:104px
`

const Content = styled.div`
  max-width: 710px;
 

`

const Education = styled.div`
margin-top: 40px;
`

const Experience = styled.div`
  
`

const AboutDecoration = styled.div`

`
const AboutImageDecotarion = styled.img`
  max-width:530px;
  max-height: 830px;
  
`