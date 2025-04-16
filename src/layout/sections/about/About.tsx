import { AboutExperience } from "./AboutExperience";
import { Container } from "../../../components/Container";
import { AboutEducation } from "./AboutEducation";

import { S } from "./About_Styles";


export const About = () => {
  return (
    <S.About>
       <Container>
     
        <S.Content>
       
      <S.AboutTitle>About Me</S.AboutTitle>
        <S.DescriptionText>
            The Generator App is an online tool that helps you to export 
            ready-made templates ready to work as your future website. It helps you to combine slides, 
            panels and other components and export it as a set of static files: HTML/CSS/JS.
            </S.DescriptionText>
           

            <S.Experience >
            <S.Subtitle>Work Experience</S.Subtitle>
            <AboutExperience/>
            </S.Experience >

            <S.Education>
            <S.Subtitle>Education</S.Subtitle>
            <AboutEducation/>
            </S.Education>
            </S.Content>

          
            </Container>       
    </S.About>
  );
};


