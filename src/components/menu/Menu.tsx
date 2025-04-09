import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <MenuItem>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </MenuItem>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 67px;
  }
 
 padding: 8px 0px 25px 0px
`;

const ListItem = styled.li`
font-family: var(--second-family);
font-size: 20px;
text-align: center;
color: ${theme.colors.fontText};
transition: 0.5s;
&:hover{
  transform: scale(1.2);
}

`


const Link = styled.a`
color: ${theme.colors.fontText};
`

const MenuItem = styled.ul`
  
`