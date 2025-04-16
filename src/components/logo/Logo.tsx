import styled from "styled-components";
import logo from "../../assets/images/reactLogo-svg.svg";

export const Logo = () => {
  return (
    <LinkLogo href="">
      <StyledLogo src={logo} alt="" />
    </LinkLogo>
  );
};

const StyledLogo = styled.img`
 animation: rotate 1s linear ;

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const LinkLogo = styled.a``;
