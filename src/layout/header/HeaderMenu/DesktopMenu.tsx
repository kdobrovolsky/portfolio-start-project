import { S } from "./HeaderMenu_Styles";

export const DesktopMenu = (props: { menuItems: Array<string> }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <S.StyledMenu>
      <S.MenuItem>
        {props.menuItems.map((item, index) => (
          <S.DesktopListItem key={index}>
            <S.DesktopLink 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
            >
              {item}
            </S.DesktopLink>
          </S.DesktopListItem>
        ))}
      </S.MenuItem>
    </S.StyledMenu>
  );
};