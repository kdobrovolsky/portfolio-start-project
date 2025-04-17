import styled from "styled-components"
import goTop from "../../assets/images/goTop.svg"


export const GoTopBtn = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <StyledGoTopBtn onClick={scrollToTop}>
        <img src={goTop} alt="Кнопка GoTop" /> 
      </StyledGoTopBtn>
    );
  };
  
  const StyledGoTopBtn = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 40px;
    height: 40px;
    background: rgba(122, 122, 122, 0.199);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: background 0.3s;
  
    &:hover {
      background: rgba(59, 59, 59, 0.267);
    }
  
    svg {
      display: block;
    }
  `;