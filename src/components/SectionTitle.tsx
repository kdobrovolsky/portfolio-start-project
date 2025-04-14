import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";


export const SectionTitle = styled.h2`
${font({weight: 700, Fmax:48 , Fmin:32})}
   /* font-weight: 700; */
/* font-size: 48px; */
line-height: 54%;
text-align: center;
color: ${theme.colors.fontTitle};
margin-bottom:50px;


`