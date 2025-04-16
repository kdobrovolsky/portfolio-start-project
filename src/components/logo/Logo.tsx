import styled from "styled-components";
import logo from "../../assets/images/reactLogo-svg.svg";

export const Logo = () => {
  return (
    <LinkLogo href="">
      <StyledLogo src={logo} alt="" />
    </LinkLogo>
  );
};

const StyledLogo = styled.img``;

const LinkLogo = styled.a``;
