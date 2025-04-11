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