/* eslint-disable react-refresh/only-export-components */
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/Rectangle1.jpg";
import socialImgTwo from "../../../assets/images/Rectangle2.jpg";
import socialImgFree from "../../../assets/images/Rectangle3.jpg";
import socialImgFour from "../../../assets/images/Rectangle4.jpg";
import socialImgFive from "../../../assets/images/Rectangle5.jpg";
import socialImgSix from "../../../assets/images/Rectangle6.jpg";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { SectionText } from "../../../components/SectionText";
import { S } from "./Works_Styles";
import AnimatedSection from "../../../components/animated/AnimatedSection";

export const projectsData = [
  {
    id: "1",
    src: socialImg,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML,", "JavaScript,", "SASS,", "React"],
  },
  {
    id: "2",
    src: socialImgTwo,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML,", "JavaScript,", "SASS,", "React"],
  },
  {
    id: "3",
    src: socialImgFree,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML,", "JavaScript,", "SASS,", "React"],
  },
  {
    id: "4",
    src: socialImgFour,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML,", "JavaScript,", "SASS,", "React"],
  },
  {
    id: "5",
    src: socialImgFive,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML,", "JavaScript,", "SASS,", "React"],
  },
  {
    id: "6",
    src: socialImgSix,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: ["HTML,", "JavaScript,", "SASS,", "React"],
  },
];

export const Works = () => {
  return (
    <S.Works id = {"projects"}>
      <Container>
      <AnimatedSection from="right" delay={0.2}>
        <SectionTitle>Projects</SectionTitle>
        <SectionText $marginBottom="113px">
          Things I’ve built so far
        </SectionText>
        <S.WorksGrid>
          {projectsData.map((project) => (
            <Work
              key={project.id}
              src={project.src}
              title={project.title}
              text={project.text}
              techStack={project.techStack}
            />
          ))}
        </S.WorksGrid>
        </AnimatedSection>
      </Container>
    </S.Works>
  );
};
