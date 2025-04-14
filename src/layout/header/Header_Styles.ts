import styled from "styled-components";
import { theme } from "../../styles/Theme";


const Header = styled.header`
  background-color: #221c1c45;
  padding: 20px 0;
  position:fixed;
  width:100%;
  top:0;
  left:0;
  right: 0;
  z-index: 99999;

  @media ${theme.media.mobile} {
   display:flex;
  }
`;

export const S = {
    Header
}