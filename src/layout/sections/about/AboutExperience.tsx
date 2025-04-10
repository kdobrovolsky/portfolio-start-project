import styled from "styled-components";
import imgData from '../../../assets/images/data.svg'
import imgLocations from '../../../assets/images/point.svg'
import imgBuild from '../../../assets/images/mdi_office-building.svg'
import { theme } from "../../../styles/Theme";


const experienceData = [
  {
    position: "Junior Web Developer",
    company: "Dr. Rajkumar's Learning App",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021",
    positionLaber: "Full Time"
  },
  {
    position: "Web Development Intern",
    company: "IonPixelz Web Solutions",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021",
     positionLaber: "Intership"
  },
  {
    position: "SEO / SEM Specialist",
    company: "HAAPS",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021",
    positionLaber: "Intership"
  }
];

export const AboutExperience = () => {
  return (
    <StyledAboutExperience>
      {experienceData.map((exp, index) => (
        <div key={index}>
      
      <PositionContent>
      <Position>{exp.position}</Position>
      <PositionLabel>{exp.positionLaber}</PositionLabel>
      </PositionContent>

          <ContentWrapper>
            <Company><AboutImage src={imgBuild} alt="" /> {exp.company}</Company>
            <Location><AboutImage src={imgLocations} alt="" /> {exp.location}</Location>
            <Duration><AboutImage src={imgData} alt="" /> {exp.duration}</Duration>
          </ContentWrapper>
          
          {index !== experienceData.length - 0 && <Divider />}
        </div>
      ))}
    </StyledAboutExperience>
  );
};


const StyledAboutExperience = styled.div`
    
`


export const Position = styled.h4`
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
color: ${theme.colors.fontTitle};
`;

export const Company = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: ${theme.colors.fontText};
`;

export const Location = styled.span`
  font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: ${theme.colors.fontText};
`;

export const Duration = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: ${theme.colors.fontText};
text-align:right;
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
  padding:5px 0px;
`

export const AboutImage = styled.img`
  
`

export const PositionContent = styled.div`
  display: flex;
  justify-content:space-between;
`

export const PositionLabel = styled.label`
  width: 84px;
  height: 24px;
  font-weight: 600;
font-size: 9px;
line-height: 289%;
text-align: center;
color: #018c0f;
background-color: #d7ffe0;
border-radius: 100px;
`