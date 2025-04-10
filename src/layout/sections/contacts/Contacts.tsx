import styled from "styled-components"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"

import { theme } from "../../../styles/Theme"
import { SectionText } from "../../../components/SectionText"




export const Contacts = () => {
    return(
        <StyledContacts>
  
      <Container>
        
   
        <SectionTitle>Contact</SectionTitle>
        
     
        <SectionText $marginBottom="120px">Feel free to contact me here</SectionText>
        
   
        <GridWrapper>
          
    
          <ContactsContent>
        
            <TitleDescription>
              I'm available for a exciting new project. <StyleTalk>Let's Talk.</StyleTalk>
            </TitleDescription>
            
  
            <ContactsText>
              You can send me a message here OR contact me on any social networks. 
              We can grab a coffee and talk it over a phone.
            </ContactsText>
          </ContactsContent>


          <StyledForm>

            <InputGrid>
              <Field placeholder="Name"></Field>
              <Field placeholder="Email adress"></Field>
              <Field placeholder="Adress"></Field>
              <Field placeholder="Phone"></Field>
            </InputGrid>
            

            <Field placeholder="Your message" as={"textarea"}></Field>
            

            <ButtonContacts>Submit</ButtonContacts>
          </StyledForm>
        </GridWrapper>
      </Container>
    </StyledContacts>
  )
}




const StyledContacts = styled.section`
  background-color: ${theme.colors.primaryBg};
`


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Автоподбор колонок (минимум 300px) */
  gap: 60px; 
  align-items: start;


 
`


const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;

  
  
`


const StyledForm = styled.div`
  display: grid;
  gap: 10px;
  width: 100%; 
  max-width: 470px; 
  justify-self: end; 

  
  textarea {
    resize: none;
    height: 155px; 
    width: 100%; 
  }


  
  
`


const Field = styled.input`
  min-height: 50px; 
  background: rgba(241, 241, 241, 0.11); 
  border-radius: 10px;
  width: 100%; 
  

  &::placeholder {
    font-size: 15px; 
    padding: 19px 0px 16px 18px;
    color: #838383;
    font-family: "DM Sans, sans-serif";
  }
`


const ButtonContacts = styled.button`
  width: 100%; 
  min-height: 50px;
  background: ${theme.colors.accent}; 
  font-weight: 700; 
  font-size: 1rem; 
  letter-spacing: 0.1em; 
  text-transform: uppercase; 
  color: ${theme.colors.fontTitle};
  border-radius: 10px; 
  font-family: "DM Sans, sans-serif"; 
`




const ContactsContent = styled.div`

`


const TitleDescription = styled.h2`
  font-weight: 900;
  font-size: 48px;
  text-decoration-skip-ink: none;
  max-width: 534px;
  color: ${theme.colors.fontTitle};
  margin-bottom: 31px;
`


const ContactsText = styled.p`
  display: block;
  font-size: 18px;
  line-height: 150%;
  color: ${theme.colors.fontText}; 
  max-width: 421px;
`


const StyleTalk = styled.p`
  text-decoration: underline;
`