import imgData from "../../../assets/images/data.svg";
import imgBuild from "../../../assets/images/mdi_office-building.svg";
import {
  Position,
  PositionContent,
  PositionLabel,
} from "../about/About_Styles";
import { Company } from "../about/About_Styles";
import { Duration } from "../about/About_Styles";
import { Divider } from "../about/About_Styles";
import { AboutImage } from "../about/About_Styles";
import { S } from "./About_Styles";

const educationData = [
  {
    position: "Bachelor in Electronics & Communication",
    company: "Bangalore Instutute of Technology",
    duration: "Aug 2015 - Dec 2020",
    positionLabel: "Full Time",
  },
];

export const AboutEducation = () => {
  return (
    <S.AboutEducation>
      {educationData.map((exp, index) => (
        <div key={index}>
          <PositionContent>
            <Position>{exp.position}</Position>
            <PositionLabel>{exp.positionLabel}</PositionLabel>
          </PositionContent>

          <S.LocationWrapper>
            <Company>
              {" "}
              <AboutImage src={imgBuild} alt="" />
              {exp.company}
            </Company>

            <Duration>
              {" "}
              <AboutImage src={imgData} alt="" /> {exp.duration}
            </Duration>
          </S.LocationWrapper>

          {index !== educationData.length - 0 && <Divider />}
        </div>
      ))}
    </S.AboutEducation>
  );
};
