import photo from "../../../assets/images/mainPhoto2.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
export const Main = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper $align="center" $justify="space-around" $wrap="wrap">
          <S.MainContent>
            <S.SmallText>Hi there!👋</S.SmallText>
            <S.Name>I'm Kirill</S.Name>
            <S.MainTitle>I Web Developer</S.MainTitle>
            <S.MainText>
              I engineer immersive digital experiences where innovation
              harmonizes with aesthetics
            </S.MainText>
          </S.MainContent>
          <S.PhotoWrapper>
            <S.Photo src={photo} />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
