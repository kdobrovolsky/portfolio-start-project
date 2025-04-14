import styled from "styled-components";
import ImgChain from "../../../../assets/images/akar-icons_link-chain.svg";
import ImgGithub from "../../../../assets/images/akar-icons_github-fill.svg";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";
import { font } from "../../../../styles/Common";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  techStack: string[]
};



export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
      <Image src={props.src} alt="" />
      <Button>View project</Button>
     
      </ImageWrapper>
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
    
    max-height: 567px;
    width:100%;
  
   @media ${theme.media.desktop}{
    max-width: 373px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
position:relative;

`;

const  ImageWrapper = styled.div`
position:relative;


&:hover{
  ${Button}{
    opacity:1;
    z-index:1;
    transition: 0.6s;
    }
  &::before{
  content: '';
    position: absolute;
    top: 0;
    left: 0;  
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: opacity(4px);
    z-index: 1;
    border-radius: 20px 20px 0px 0px;
 
}

}

${Button}{
  opacity:0;
  position:absolute;
  left:26%;
  transform:translate(-50% -50%);
  top:50%;
}


`


const StyledTitle = styled.h3`
${font({weight: 500, Fmax:28 , Fmin:18  })}
  /* font-weight: 500;
  font-size: 28px; */
  line-height: 93%;
  padding: 28px 0px 17px 0px;
  color: ${theme.colors.fontTitle};
`;

const WorkText = styled.p`
  ${font({weight: 300, Fmax:18 , Fmin:10  })}
  color: ${theme.colors.fontTitle};
  /* font-weight: 300px;
  font-size: 18px; */
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  
`;

const TechLabel = styled.span`
${font({weight: 400, Fmax:16 , Fmin:8  })}
  color: ${theme.colors.fontTitle};
`;

const TechItems = styled.div`
  display: flex;
  gap: 8px;
`;

const TechItem = styled.span`
${font({weight: 300, Fmax:14 , Fmin:7  })}
  /* font-weight: 300;
  font-size: 14px; */
  line-height: 162%;
  color: ${theme.colors.fontTitle};
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkContent = styled.div`
  padding: 0px 21px 25px 21px;
`;

const WorkLink = styled.a`
  ${font({weight: 300, Fmax:16 , Fmin:8  })}
  /* font-weight: 300;
  font-size: 16px; */
  line-height: 162%;
  text-decoration-skip-ink: none;
  background: ${theme.colors.accent}; 
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; 
  transition: 0.5s;
&:hover{
  transform: scale(1.1);
}
`

const LinkImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  @media ${theme.media.mobile}{
    max-width:10px;
    max-height: 10px
  }

  @media ${theme.media.tablet}{
    max-width:14px;
    max-height: 14px
  }
`;
