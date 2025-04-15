import ImgChain from "../../../../assets/images/akar-icons_link-chain.svg";
import ImgGithub from "../../../../assets/images/akar-icons_github-fill.svg";
import { Button } from "../../../../components/Button";
import { S } from "../Works_Styles";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  techStack: string[];
};

export const Work = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />
        <Button>View project</Button>
      </S.ImageWrapper>
      <S.Content>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.WorkText>{props.text}</S.WorkText>
        <S.TechStack>
          <S.TechLabel>Tech stack:</S.TechLabel>
          <S.TechItems>
            {props.techStack.map((tech, index) => (
              <S.TechItem key={index}>{tech}</S.TechItem>
            ))}
          </S.TechItems>
        </S.TechStack>
        <S.LinksWrapper>
          <S.WorkLink href={"#"}>
            {" "}
            <S.LinkImage src={ImgChain} alt="" /> Live Preview
          </S.WorkLink>
          <S.WorkLink href={"#"}>
            {" "}
            <S.LinkImage src={ImgGithub} alt="" /> View Code
          </S.WorkLink>
        </S.LinksWrapper>
      </S.Content>
    </S.Work>
  );
};
