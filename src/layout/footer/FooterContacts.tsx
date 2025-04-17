import { Messages } from "../../components/messages/Messages";
import { S } from "./Footer_Styles";
import { Logo } from "../../components/logo/Logo";

export const FooterContacts = () => {
  return (
    <S.FooterContacts>
      <S.Logo>
        <Logo/>
      </S.Logo>

      <S.Content>
        <S.ContactLink href="tel:+375447392673">
          +375 (44) 739-26-73
        </S.ContactLink>
        <S.ContactLink href="mailto:kdobrovolsky02@gmail.ru">
          {" "}
          kdobrovolsky02@gmail.com
        </S.ContactLink>
        <Messages />
      </S.Content>
    </S.FooterContacts>
  );
};
