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
              <Field placeholder="Email address"></Field>
              <Field placeholder="Address"></Field>
              <Field placeholder="Phone"></Field>
            </InputGrid>
            <Field placeholder="Your message" as={"textarea"}></Field>
            <ButtonContacts type="submit">contact</ButtonContacts>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
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
  max-width: 670px; 
  justify-self: end; 

  
  textarea {
    resize: none;
    height: 155px; 
    width: 100%; 
     font-family: 'Poppins,  sans-serif'
  }
`


const Field = styled.input`
  min-height: 50px; 
  background:  #252527; 
  color: white;
  width: 100%; 
  font-family: 'Poppins,  sans-serif';

  &::placeholder {
    font-size: 20px; 
    line-height: 101%;
    font-weight: 500;
    padding: 19px 0px 16px 18px;
    background: ${theme.colors.accent}; 
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block; 
     
    
  }
`


const ButtonContacts = styled.button`
  width: 100%; 
  min-height: 50px;
  background: ${theme.colors.accent}; 
  font-weight: 700; 
  font-size: 16px; 
  letter-spacing: 0.1em; 
  text-transform: uppercase; 
  color: ${theme.colors.fontTitle};
  font-family: 'Poppins,  sans-serif';
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