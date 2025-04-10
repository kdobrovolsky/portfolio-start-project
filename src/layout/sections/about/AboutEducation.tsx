import styled from "styled-components";
import imgData from "../../../assets/images/data.svg";

import imgBuild from "../../../assets/images/mdi_office-building.svg";
import {
  Position,
  PositionContent,
  PositionLabel,
} from "../about/AboutExperience";
import { Company } from "../about/AboutExperience";
import { Duration } from "../about/AboutExperience";
import { Divider } from "../about/AboutExperience";
import { AboutImage } from "../about/AboutExperience";

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
    <StyledAboutEducation>
      {educationData.map((exp, index) => (
        <div key={index}>
          <PositionContent>
            <Position>{exp.position}</Position>
            <PositionLabel>{exp.positionLabel}</PositionLabel>
          </PositionContent>

          <LocationWrapper>
            <Company>
              {" "}
              <AboutImage src={imgBuild} alt="" />
              {exp.company}
            </Company>

            <Duration>
              {" "}
              <AboutImage src={imgData} alt="" /> {exp.duration}
            </Duration>
          </LocationWrapper>

          {index !== educationData.length - 0 && <Divider />}
        </div>
      ))}
    </StyledAboutEducation>
  );
};

const StyledAboutEducation = styled.div``;

const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
`;
