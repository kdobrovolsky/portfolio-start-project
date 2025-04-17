import photo from "../../../assets/images/mainPhoto2.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import AnimatedSection from "../../../components/animated/AnimatedSection";
export const Main = () => {
  return (
    <S.Main id={"home"}>
      <AnimatedSection from="bottom">
      <Container>
        <FlexWrapper $align="center" $justify="space-around" $wrap="wrap">
          <S.MainContent>
            <S.SmallText>Hi there!👋</S.SmallText>
            <S.Name>I'm Kirill Dobrovolsky</S.Name>
            <S.MainTitle>
              <p>I Web Developer</p>
              <Typewriter
                options={{
                  strings: ["I Web Developer", "I Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </S.MainTitle>
            <S.MainText>
              I engineer immersive digital experiences where innovation
              harmonizes with aesthetics
            </S.MainText>
          </S.MainContent>
          <Tilt>
            <S.PhotoWrapper>
              <S.Photo src={photo} />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
      </AnimatedSection>
    </S.Main>
  );
};
