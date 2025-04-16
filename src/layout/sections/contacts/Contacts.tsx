import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";
import { S } from "./Contacts_Styles";

export const Contacts = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>

        <SectionText $marginBottom="120px">
          Feel free to contact me here
        </SectionText>

        <S.FlexWrapper>
          <S.ContactsContent>
            <S.TitleDescription>
              I'm available for a exciting new project.{" "}
              <S.StyleTalk>Let's Talk.</S.StyleTalk>
            </S.TitleDescription>

            <S.ContactsText>
              You can send me a message here OR contact me on any social
              networks. We can grab a coffee and talk it over a phone.
            </S.ContactsText>
          </S.ContactsContent>

          <S.Form>
            <S.InputGrid>
              <S.Field placeholder="Name"></S.Field>
              <S.Field placeholder="Email address"></S.Field>
              <S.Field placeholder="Address"></S.Field>
              <S.Field placeholder="Phone"></S.Field>
              <S.Field placeholder="Your message" as={"textarea"}></S.Field>
              <S.ButtonContacts type="submit">contact</S.ButtonContacts>
            </S.InputGrid>
          </S.Form>
        </S.FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
