import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import { Container } from "../../../components/Container";
import { SectionText } from "../../../components/SectionText";
import { S } from "./Skills_Styles";

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        
      <SectionTitle>My Tech Stack</SectionTitle>
      <SectionText $marginBottom="140px">Technologies I’ve been working with recently</SectionText>

        <Skill />
      
      </Container>
    </S.Skills>
  );
};


