import styled from "styled-components";
import ImgChain from "../../../../assets/images/akar-icons_link-chain.svg";
import ImgGithub from "../../../../assets/images/akar-icons_github-fill.svg";
import { theme } from "../../../../styles/Theme";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  techStack: string[]
};



export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <WorkContent>
        <StyledTitle>{props.title}</StyledTitle>
        <WorkText>{props.text}</WorkText>
        <TechStack>
          <TechLabel>Tech stack:</TechLabel>
          <TechItems>
            {props.techStack.map((tech, index) => (
              <TechItem key={index}>{tech}</TechItem>
            ))}
          </TechItems>
        </TechStack>
        <LinksWrapper>
          <WorkLink href={"#"}>
            {" "}
            <LinkImage src={ImgChain} alt="" /> Live Preview
          </WorkLink>
          <WorkLink href={"#"}>
            {" "}
            <LinkImage src={ImgGithub} alt="" /> View Code
          </WorkLink>
        </LinksWrapper>
      </WorkContent>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #363636;
  border-radius: 20px;
  padding: 5px;
  min-width: 373px;
  min-height: 567px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 93%;
  padding: 28px 0px 17px 0px;
  color: ${theme.colors.fontTitle};
`;

const WorkText = styled.p`
  color: ${theme.colors.fontTitle};
  font-weight: 300px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  
`;

const TechLabel = styled.span`
  color: ${theme.colors.fontTitle};
  font-weight: 500;
`;

const TechItems = styled.div`
  display: flex;
  gap: 8px;
`;

const TechItem = styled.span`
  color: ${theme.colors.fontTitle};
  font-weight: 300;
  font-size: 16px;
  line-height: 162%;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkContent = styled.div`
  padding: 0px 21px 25px 21px;
`;

const WorkLink = styled.a`
  color: ${theme.colors.fontTextAdditional};
  font-weight: 400;
  font-size: 16px;
  line-height: 162%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

const LinkImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;
