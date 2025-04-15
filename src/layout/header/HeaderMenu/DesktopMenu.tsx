import { S } from "./HeaderMenu_Styles";

export const DesktopMenu = (props: { menuItems: Array<string> }) => {
  return (
    <S.StyledMenu>
      <S.MenuItem>
        {props.menuItems.map((item, index) => {
          return (
            <S.DesktopListItem key={index}>
              <S.DesktopLink href="">{item}</S.DesktopLink>
            </S.DesktopListItem>
          );
        })}
      </S.MenuItem>
    </S.StyledMenu>
  );
};



