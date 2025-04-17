import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Contacts = styled.section`
  background-color: ${theme.colors.primaryBg};
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  @media ${theme.media.mobile} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  textarea {
    grid-column: span 2;
    min-height: 120px;
  }
  button {
    grid-column: span 2;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: 670px;

  textarea {
    resize: none;
    height: 155px;
    width: 100%;
    font-family: "Poppins,  sans-serif";
  }
`;

const Field = styled.input`
  min-height: 50px;
  background: #252527;
  color: white;
  width: 100%;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    ${font({ weight: 500, Fmax: 20, Fmin: 14 })}
    line-height: 101%;
    padding: 19px 0px 16px 18px;
    background: ${theme.colors.accent};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
`;

const ButtonContacts = styled.button`
  ${font({ weight: 700, Fmax: 16, Fmin: 12 })}
  width: 100%;
  min-height: 50px;
  background: ${theme.colors.accent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.fontTitle};
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(231, 15, 170, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ContactsContent = styled.div``;

const TitleDescription = styled.h2`
  ${font({ weight: 900, Fmax: 48, Fmin: 32 })}
  text-decoration-skip-ink: none;
  max-width: 534px;
  color: ${theme.colors.fontTitle};
  margin-bottom: 31px;
  @media ${theme.media.mobile} {
    max-width: none;
  }
`;

const ContactsText = styled.p`
  ${font({ Fmax: 20, Fmin: 12 })}
  display: block;
  font-size: 18px;
  line-height: 150%;
  color: ${theme.colors.fontText};
  max-width: 421px;
  @media ${theme.media.mobile} {
    max-width: none;
  }
`;

const StyleTalk = styled.span`
  ${font({ weight: 900, Fmax: 48, Fmin: 32 })}
  display:block;
  text-decoration: underline;
  background: ${theme.colors.accent};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const S = {
  Contacts,
  FlexWrapper,
  InputGrid,
  Form,
  Field,
  ButtonContacts,
  ContactsContent,
  TitleDescription,
  ContactsText,
  StyleTalk,
};
