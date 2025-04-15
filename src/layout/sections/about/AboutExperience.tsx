import imgData from '../../../assets/images/data.svg'
import imgLocations from '../../../assets/images/point.svg'
import imgBuild from '../../../assets/images/mdi_office-building.svg'
import { S } from './About_Styles';


const experienceData = [
  {
    position: "Junior Web Developer",
    company: "Dr. Rajkumar's Learning App",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021",
    positionLabel: "Full Time"
  },
  {
    position: "Web Development Intern",
    company: "IonPixelz Web Solutions",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021",
     positionLabel: "Intership"
  },
  {
    position: "SEO / SEM Specialist",
    company: "HAAPS",
    location: "Bengaluru",
    duration: "Sep 2021 - Dec 2021",
    positionLabel: "Intership"
  }
];

export const AboutExperience = () => {
  return (
    <S.AboutExperience>
      {experienceData.map((exp, index) => (
        <div key={index}>
      
      <S.PositionContent>
      <S.Position>{exp.position}</S.Position>
      <S.PositionLabel>{exp.positionLabel}</S.PositionLabel>
      </S.PositionContent>

          <S.ContentWrapper>
            <S.Company><S.AboutImage src={imgBuild} alt="" /> {exp.company}</S.Company>
            <S.Location><S.AboutImage src={imgLocations} alt="" /> {exp.location}</S.Location>
            <S.Duration><S.AboutImage src={imgData} alt="" /> {exp.duration}</S.Duration>
          </S.ContentWrapper>
          
          {index !== experienceData.length - 0 && <S.Divider />}
        </div>
      ))}
    </S.AboutExperience>
  );
};


