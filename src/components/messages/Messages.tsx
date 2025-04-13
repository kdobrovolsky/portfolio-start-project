
import styled from 'styled-components';
import imgGitGub from '../../assets/images/gitHub.svg'
import twitter from '../../assets/images/telegramicons_telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import { theme } from '../../styles/Theme';

export const Messages = () => {
  return (
    <StyledMessages>
        <ul>
          <li>
            <a href="">
             <img src={imgGitGub} alt="" />
            </a>
          </li>
          <li>
            <a href="">
            <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="">
            <img src={linkedin} alt="" />
            </a>
          </li>
        </ul>
    </StyledMessages>
  );
};

const StyledMessages = styled.div`
   @media ${theme.media.tablet}{
    display:none;
  };

   @media ${theme.media.mobile}{
    display:none;
   };
  ul{
    display:flex;
    align-content:center;
    gap: 20px;
    
  }
  ul li{
    list-style:none;
    transition: 0.5s;
&:hover{
  transform: scale(1.2);
}
  }


  
`