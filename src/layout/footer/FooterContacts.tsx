import { Messages } from "../../components/messages/Messages";
import logotip from "../../assets/images/reactLogo-svg.svg";
import { S } from "./Footer_Styles";

export const FooterContacts = () => {
  return (
    <S.FooterContacts>
      <S.Logo>
        <S.FooterLogo src={logotip} alt="" />
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
