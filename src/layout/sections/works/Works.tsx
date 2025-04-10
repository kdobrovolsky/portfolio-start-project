/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/Rectangle1.jpg";
import socialImgTwo from "../../../assets/images/Rectangle2.jpg";
import socialImgFree from "../../../assets/images/Rectangle3.jpg";
import socialImgFour from "../../../assets/images/Rectangle4.jpg";
import socialImgFive from "../../../assets/images/Rectangle5.jpg";
import socialImgSix from "../../../assets/images/Rectangle6.jpg";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { SectionText } from "../../../components/SectionText";

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
    <StyledWorks>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <SectionText $marginBottom="113px">
          Things I’ve built so far
        </SectionText>
        <WorksGrid>
          {projectsData.map((project) => (
            <Work
              key={project.id}
              src={project.src}
              title={project.title}
              text={project.text}
              techStack={project.techStack}
            />
          ))}
        </WorksGrid>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: ${theme.colors.primaryBg};
`;

// export const StyledText = styled.span`
//   display:block;
// font-size: 32px;
// line-height: 81%;
// text-align: center;
// color: ${theme.colors.fontText};
// `

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 0 20px;
`;
