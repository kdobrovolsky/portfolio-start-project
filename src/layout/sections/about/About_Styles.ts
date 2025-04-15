import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
// About

const About = styled.section`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.h3`
  ${font({ weight: 700, Fmax: 42, Fmin: 22 })}
  line-height: 124%;
  letter-spacing: -0.01em;
  color: ${theme.colors.fontTitle};
  margin-bottom: 40px;
`;

const AboutTitle = styled.h2`
  ${font({ weight: 700, Fmax: 42, Fmin: 28 })}
  line-height: 124%;
  letter-spacing: -0.01em;
  color: ${theme.colors.fontTitle};
  margin-bottom: 40px;
`;

const DescriptionText = styled.p`
  ${font({ Fmax: 18, Fmin: 8 })}
  line-height: 144%;
  color: ${theme.colors.fontText};
  margin-bottom: 38px;
  max-width: 708px;
  max-height: 104px;
`;

const Content = styled.div`
  max-width: 710px;
`;

const Education = styled.div`
  margin-top: 40px;
`;

const Experience = styled.div``;

const AboutDecoration = styled.div`
  overflow: hidden;
`;
const AboutImageDecoration = styled.img`
  max-width: 530px;
  max-height: 830px;
`;

/* AboutEducation */

const AboutEducation = styled.div``;

const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
`;

/* AboutExperience */

const AboutExperience = styled.div``;

export const Position = styled.h4`
  ${font({ Fmax: 20, Fmin: 8 })}
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${theme.colors.fontTitle};
`;

export const Company = styled.span`
  ${font({ weight: 500, Fmax: 12, Fmin: 4 })}
  line-height: 233%;
  letter-spacing: 0.08em;
  color: ${theme.colors.fontText};
  display: block;
`;

export const Location = styled.span`
  ${font({ weight: 500, Fmax: 12, Fmin: 4 })}
  line-height: 233%;
  letter-spacing: 0.08em;
  color: ${theme.colors.fontText};
`;

export const Duration = styled.span`
  ${font({ weight: 500, Fmax: 12, Fmin: 4 })}
  line-height: 233%;
  letter-spacing: 0.08em;
  color: ${theme.colors.fontText};
  text-align: right;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #333;
  margin: 20px 0;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 45px;
  padding: 5px 0px;
`;

export const AboutImage = styled.img`
  @media ${theme.media.mobile} {
    width: 6px;
    height: 6px;
    @media ${theme.media.tablet} {
      width: 8px;
      height: 8px;
    }
  }
`;

export const PositionContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PositionLabel = styled.label`
  ${font({ weight: 600, Fmax: 9, Fmin: 4 })}
  width: 84px;
  height: 24px;
  line-height: 289%;
  text-align: center;
  color: #018c0f;
  background-color: #d7ffe0;
  border-radius: 100px;
  @media ${theme.media.mobile} {
    width: 33px;
    height: 14px;
  }

  @media ${theme.media.tablet} {
    width: 58px;
    height: 20px;
  }
`;

export const S = {
// About
  About,
  Subtitle,
  AboutTitle,
  DescriptionText,
  Content,
  Education,
  Experience,
  AboutDecoration,
  AboutImageDecoration,
/* AboutEducation */
  AboutEducation,
  LocationWrapper,
/* AboutExperience */
  AboutExperience,
  Position,
  Company,
  Location,
  Duration,
  Divider,
  ContentWrapper,
  AboutImage,
  PositionContent,
  PositionLabel,
};
