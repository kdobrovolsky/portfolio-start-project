import { Container } from "../../../components/Container";
import { S } from "./Slogan_Styles";

export const Slogan = () => {
  return (
    <S.Slogan>
      <Container>
        <S.TitleSlogan>For any questions please mail me:</S.TitleSlogan>
        <S.TextSlogan href="mailto:kdobrovolsky02@gmail.ru">
          {" "}
          kdobrovolsky02@gmail.com
        </S.TextSlogan>
      </Container>
    </S.Slogan>
  );
};
