import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import GitHub from "../../../assets/images/akar-icons_github-fill.svg"
import styledComponents from "../../../assets/images/styledComponents.svg"
import { theme } from "../../../styles/Theme";



export const Skill = () => {
  return (
    <StyledSkill>
      <SkillItem>
        <Icon iconId={"html"} width="120" height="120" viewBox="0 0 120 120" />
        <SkillName>HTML</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"css"} width="120" height="119" viewBox="0 0 120 119"/>
        <SkillName>CSS</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"javascript"} width="120" height="120" viewBox="0 0 120 120"/>
        <SkillName>JavaScript</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"react"} width="113" height="120" viewBox="0 0 113 101"/>
        <SkillName>React</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"redux"} width="105" height="120" viewBox="0 0 105 100"/>
        <SkillName>Redux</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"bootstrap"} width="88" height="120" viewBox="0 0 88 87"/>
        <SkillName>Bootstrap</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"tailwind"} width="131" height="120" viewBox="0 0 131 131"/>
        <SkillName>Tailwind</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"sass"} width="117" height="120" viewBox="0 0 117 87"/>
        <SkillName>Sass</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"git"} width="105" height="120" viewBox="0 0 105 105"/>
        <SkillName>Git</SkillName>
      </SkillItem>
      
      <SkillItem>
        <SkillImage src={styledComponents} alt="styled-components" />
        <SkillName>Styled</SkillName>
      </SkillItem>
      
      <SkillItem>
        <Icon iconId={"vscode"} width="112" height="120" viewBox="0 0 112 112"/>
        <SkillName>VS Code</SkillName>
      </SkillItem>
      
      <SkillItem>
        <SkillImage src={GitHub} alt="GitHub" />
        <SkillName>GitHub</SkillName>
      </SkillItem>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 50px;
  padding: 0 20px;
  justify-items: center;
  @media ${theme.media.tablet}{
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${theme.media.mobile}{
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
  transition: 0.5s;
&:hover{
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
  user-select:none;
  pointer-events:none;
  object-fit: contain;
 
`;

