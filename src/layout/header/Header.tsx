
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Messages } from "../../components/messages/Messages";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./MobileMenu";
import { S } from "./Header_Styles";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper $justify="space-between" $wrap="wrap" >
          <Logo />
          <Menu menuItems={items} />
          <MobileMenu menuItems={items} />
          <Messages />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

