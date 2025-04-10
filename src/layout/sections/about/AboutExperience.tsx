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
    duration: "Sep 2021 - Dec 2021"
  },
  {
    position: "Web Development Intern",
    company: "IonPixelz Web Solutions",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021"
  },
  {
    position: "SEO / SEM Specialist",
    company: "HAAPS",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021"
  }
];

export const AboutExperience = () => {
  return (
    <StyledAboutExperience>
      {experienceData.map((exp, index) => (
        <div key={index}>
          <Position>{exp.position}</Position>
          
          <ContentWrapper>
            <Company><AboutImage src={imgBuild} alt="" /> {exp.company}</Company>
            <Location><AboutImage src={imgLocations} alt="" /> {exp.location}</Location>
            <Duration><AboutImage src={imgData} alt="" /> {exp.duration}</Duration>
          </ContentWrapper>
          
          {index !== experienceData.length - 1 && <Divider />}
        </div>
      ))}
    </StyledAboutExperience>
  );
};


const StyledAboutExperience = styled.div`
    
`

export const LocationWrapper = styled.div`
    display:flex;
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
  margin: 40px 0;
`;

export const ContentWrapper = styled.div`
 display: grid;
  grid-template-columns: 1fr auto 1fr; 
  gap: 45px;
  padding:5px 0px;
`

export const AboutImage = styled.img`
  
`