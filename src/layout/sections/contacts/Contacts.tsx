import styled from "styled-components"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"

import { theme } from "../../../styles/Theme"
import { SectionText } from "../../../components/SectionText"




export const Contacts = () => {
    return(
        <StyledContacts>
      {/* Общий контейнер для контента (вероятно, задает отступы/максимальную ширину) */}
      <Container>
        
        {/* Заголовок секции */}
        <SectionTitle>Contact</SectionTitle>
        
        {/* Текст под заголовком с нижним отступом 120px */}
        <SectionText $marginBottom="120px">Feel free to contact me here</SectionText>
        
        {/* Основной Grid-контейнер, заменяющий FlexWrapper */}
        <GridWrapper>
          
          {/* Левая часть с контактной информацией */}
          <ContactsContent>
            {/* Основной заголовок с выделенной частью "Let's Talk" */}
            <TitleDescription>
              I'm available for a exciting new project. <StyleTalk>Let's Talk.</StyleTalk>
            </TitleDescription>
            
            {/* Пояснительный текст */}
            <ContactsText>
              You can send me a message here OR contact me on any social networks. 
              We can grab a coffee and talk it over a phone.
            </ContactsText>
          </ContactsContent>

          {/* Правая часть с формой */}
          <StyledForm>
            {/* Сетка для полей ввода (2 колонки) */}
            <InputGrid>
              <Field placeholder="Name"></Field>
              <Field placeholder="Email adress"></Field>
              <Field placeholder="Adress"></Field>
              <Field placeholder="Phone"></Field>
            </InputGrid>
            
            {/* Текстовое поле для сообщения */}
            <Field placeholder="Your message" as={"textarea"}></Field>
            
            {/* Кнопка отправки */}
            <ButtonContacts>Submit</ButtonContacts>
          </StyledForm>
        </GridWrapper>
      </Container>
    </StyledContacts>
  )
}

/* Стили компонента */

// Стиль для всей секции контактов
const StyledContacts = styled.section`
  background-color: ${theme.colors.primaryBg}; /* Фон из темы */
`

// Grid-контейнер для основного содержимого
const GridWrapper = styled.div`
  display: grid; /* Активируем Grid */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Автоподбор колонок (минимум 300px) */
  gap: 60px; /* Расстояние между элементами */
  align-items: start; /* Выравнивание по верху */

  /* Адаптив для планшетов */
 
`

// Сетка для полей ввода
const InputGrid = styled.div`
  display: grid; /* Включаем Grid */
  grid-template-columns: repeat(2, 1fr); /* 2 колонки равной ширины */
  gap: 7px; /* Расстояние между полями */

  /* Адаптив для мобильных */
  
`

// Стиль для формы
const StyledForm = styled.div`
  display: grid; /* Grid-раскладка */
  gap: 10px; /* Промежуток между элементами */
  width: 100%; /* Занимает всю ширину */
  max-width: 470px; /* Максимальная ширина */
  justify-self: end; /* Выравнивание по правому краю (для десктопа) */

  /* Стиль для textarea */
  textarea {
    resize: none; /* Запрет изменения размера */
    height: 155px; /* Фиксированная высота */
    width: 100%; /* Ширина 100% */
  }

  /* Адаптив для планшетов */
  
  
`

// Стиль для полей ввода
const Field = styled.input`
  min-height: 50px; /* Минимальная высота */
  background: rgba(241, 241, 241, 0.11); /* Полупрозрачный фон */
  border-radius: 10px; /* Скругление углов */
  width: 100%; /* Ширина 100% */
  
  /* Стиль для placeholder */
  &::placeholder {
    font-size: 15px; /* Размер шрифта */
    padding: 19px 0px 16px 18px; /* Внутренние отступы */
    color: #838383; /* Цвет текста */
    font-family: "DM Sans, sans-serif"; /* Шрифт */
  }
`

// Стиль для кнопки
const ButtonContacts = styled.button`
  width: 100%; /* Ширина 100% */
  min-height: 50px; /* Минимальная высота */
  background: ${theme.colors.accent}; /* Цвет фона из темы */
  font-weight: 700; /* Жирный шрифт */
  font-size: 1rem; /* Размер шрифта */
  letter-spacing: 0.1em; /* Расстояние между буквами */
  text-transform: uppercase; /* Все буквы заглавные */
  color: ${theme.colors.fontTitle}; /* Цвет текста из темы */
  border-radius: 10px; /* Скругление углов */
  font-family: "DM Sans, sans-serif"; /* Шрифт */
`

// Остальные компоненты (без изменений):

// Контейнер для контактной информации
const ContactsContent = styled.div`
  /* Стили остаются прежними */
`

// Заголовок
const TitleDescription = styled.h2`
  font-weight: 900;
  font-size: 48px;
  text-decoration-skip-ink: none;
  max-width: 534px;
  color: ${theme.colors.fontTitle};
  margin-bottom: 31px;
`

// Текст контактов
const ContactsText = styled.p`
  display: block;
  font-size: 18px;
  line-height: 150%;
  color: ${theme.colors.fontText}; 
  max-width: 421px;
`

// Стиль для выделенного текста "Let's Talk"
const StyleTalk = styled.p`
  text-decoration: underline;
`