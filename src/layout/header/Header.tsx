
import { Logo } from "../../components/logo/Logo";
import { Messages } from "../../components/messages/Messages";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./HeaderMenu/MobileMenu";
import { S } from "./Header_Styles";
import { DesktopMenu } from "./HeaderMenu/DesktopMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper $justify="space-between" $wrap="wrap" >
          <Logo />
          <DesktopMenu menuItems={items} />
          <MobileMenu menuItems={items} />
          <Messages />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

