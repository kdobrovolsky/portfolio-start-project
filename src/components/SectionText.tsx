import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

type SectionText = {
   $margin?: string
   $marginTop?: string
   $marginBottom?: string
   $marginRight?: string
   $marginLeft?: string
}

export const SectionText = styled.p<SectionText>`
${font({weight: 400, Fmax:32 , Fmin:22})}
text-align: center;
color: ${theme.colors.fontText};
margin: ${props => props.$margin || "0"};
margin-top: ${props => props.$marginTop || "0"};
margin-bottom: ${props => props.$marginBottom || "0"};
margin-right: ${props => props.$marginRight || "0"};
margin-left: ${props => props.$marginLeft|| "0"};
@media ${theme.media.mobile}{
    margin-bottom: 80px
   
  }

  @media ${theme.media.tablet}{
    margin-bottom: 100px
   
  }
`