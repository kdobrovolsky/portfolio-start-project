import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Messages } from "../../components/messages/Messages";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify="space-between">
          <Logo />
          <Menu menuItems={items} />
          <Messages />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #221c1c45;
  padding: 20px 0;
  position:fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 99999;
`;
