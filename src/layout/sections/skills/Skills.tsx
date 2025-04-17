import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import { Container } from "../../../components/Container";
import { SectionText } from "../../../components/SectionText";
import { S } from "./Skills_Styles";
import AnimatedSection from "../../../components/animated/AnimatedSection";

export const Skills = () => {
  return (
    <S.Skills id = {"tech stack"}>
      <Container>
      <AnimatedSection from="top" delay={0.2}>
        <SectionTitle>My Tech Stack</SectionTitle>
        <SectionText $marginBottom="140px">
          Technologies I’ve been working with recently
        </SectionText>

        <Skill />
      </AnimatedSection>
      </Container>
    </S.Skills>
  );
};
