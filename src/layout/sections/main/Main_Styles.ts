import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";



const Main = styled.section`
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
  @media ${theme.media.mobile} {
    padding-top: 135px;
  }
`;

const MainContent = styled.div`
  padding: 15px 0px;
`;

const MainTitle = styled.h1`
  ${font({ weight: 700, Fmax: 48, Fmin: 32 })}
  letter-spacing: -0.02em;
  color: ${theme.colors.fontTextAdditional};
`;

const SmallText = styled.span`
  ${font({ weight: 700, Fmax: 48, Fmin: 32 })}
  letter-spacing: -0.02em;
  color: ${theme.colors.fontTextAdditional};
`;

const Name = styled.span`
  ${font({ weight: 700, Fmax: 48, Fmin: 32 })}
  display:flex;
  margin: 10px 0px;
  letter-spacing: -0.02em;
  color: ${theme.colors.fontTextAdditional};
  background: ${theme.colors.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const MainText = styled.p`
  ${font({ weight: 500, Fmax: 30, Fmin: 14 })}
  display: block;
  color: #bcbcbc;
  max-width: 693px;
  max-height: 93px;
  text-align: left;
  margin-top: 30px;
`;

const PhotoWrapper = styled.div`
  position: relative;

  z-index: 1;
  &::before {
    content: "";
    width: 392px;
    height: 574px;
    border: 5px solid;
    border-image: ${theme.colors.accent} 1;
    position: absolute;
    top: -6px;
    left: 36px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 302px;
      height: 422px;
    }
  }
`;

const Photo = styled.img`
  max-width: 554px;
  max-height: 562px;
  object-fit: cover;
  padding: 20px;

  @media ${theme.media.mobile} {
    width: 340px;
    height: 420px;
  }
`;

export const S = {
  Main,
  MainContent,
  MainTitle,
  SmallText,
  Name,
  MainText,
  PhotoWrapper,
  Photo,
};
