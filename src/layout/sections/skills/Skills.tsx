import styled from "styled-components";

import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { SectionText } from "../../../components/SectionText";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        
      <SectionTitle>My Tech Stack</SectionTitle>
      <SectionText $marginBottom="140px">Technologies I’ve been working with recently</SectionText>

        <Skill />
      
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: ${theme.colors.primaryBg};
 
`;


// const StyledSkillsText = styled.span`
//   font-weight: 400;
// font-size: 32px;
// line-height: 81%;
// text-align: center;
// color:${theme.colors.fontText}
// `
