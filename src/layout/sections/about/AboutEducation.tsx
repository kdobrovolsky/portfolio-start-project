import styled from "styled-components"
import imgData from '../../../assets/images/data.svg'

import imgBuild from '../../../assets/images/mdi_office-building.svg'
import {Position} from '../about/AboutExperience'
import {Company} from '../about/AboutExperience'
import {Duration} from '../about/AboutExperience'
import {Divider} from '../about/AboutExperience'

import {AboutImage} from '../about/AboutExperience'

export const AboutEducation = () => {
  return (
    <StyledAboutEducation>
      <Position>Bachelor in Electronics & Communication</Position>

          <LocationWrapper>
          <Company> <AboutImage src={imgBuild} alt="" />Bangalore Instutute of Technology</Company>

          <Duration> <AboutImage src={imgData} alt="" /> Aug 2015 - Dec 2020</Duration>
          </LocationWrapper> 
          <Divider />
    </StyledAboutEducation>
 
  );
}

const StyledAboutEducation = styled.div`

`

const LocationWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  padding:5px 0px;
`