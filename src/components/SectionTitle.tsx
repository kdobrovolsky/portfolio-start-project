import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({ weight: 700, Fmax: 48, Fmin: 38 })}
   line-height: 1.2;
  text-align: center;
  color: ${theme.colors.fontTitle};
  margin-bottom: 50px;
`;
