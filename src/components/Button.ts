import styled from "styled-components";



export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    position: relative;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    border-radius: 20px; 
    color: white; 
    
    cursor: pointer; 
    &:hover{
            &::before{
                height:100%;
                width:100%
            }
    };


    
        
    

   
    
    

`
