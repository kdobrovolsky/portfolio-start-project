import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const Slogan = styled.section`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleSlogan = styled.h2`
  ${font({ weight: 700, Fmax: 58, Fmin: 18 })}
  font-family: "DM Sans", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${theme.colors.fontTitle};
`;

const TextSlogan = styled.a`
  ${font({ weight: 700, Fmax: 58, Fmin: 18 })}
  font-family: "DM Sans", sans-serif;
  line-height: 121%;
  letter-spacing: -0.02em;
  text-align: center;
  background: ${theme.colors.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  text-align: center;
`;

export const S = {
  Slogan,
  TitleSlogan,
  TextSlogan,
};
