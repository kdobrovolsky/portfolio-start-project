import { FooterContacts } from "./FooterContacts";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <FooterContacts />
        <S.FooterContent>
          <S.BottomFooterText>
            Designed and built by <S.Text>Kirill</S.Text> with{" "}
            <S.Text>Love</S.Text> & <S.Text>Coffee</S.Text>
          </S.BottomFooterText>
        </S.FooterContent>
      </Container>
    </S.Footer>
  );
};
