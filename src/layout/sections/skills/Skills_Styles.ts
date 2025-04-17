import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  background-color: ${theme.colors.primaryBg};
`;

const Skill = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 50px;
  padding: 0 20px;
  justify-items: center;
  @media ${theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const SkillName = styled.figcaption`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.fontTitle};
  text-align: center;
`;

const SkillImage = styled.img`
  width: 120px;
  height: 120px;
  user-select: none;
  pointer-events: none;
  object-fit: contain;
`;

export const S = {
  Skills,
  Skill,
  SkillItem,
  SkillName,
  SkillImage,
};
