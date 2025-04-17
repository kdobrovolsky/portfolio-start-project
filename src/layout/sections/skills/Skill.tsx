import { Icon } from "../../../components/icon/Icon";
import GitHub from "../../../assets/images/akar-icons_github-fill.svg";
import styledComponents from "../../../assets/images/styledComponents.svg";
import { S } from "./Skills_Styles";

type SkillItemType = {
  iconId?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  skillName: string;
  src?: string;
  alt?: string;
};

const skillData = [
  {
    iconId: "html",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    skillName: "HTML",
  },
  {
    iconId: "css",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    skillName: "CSS",
  },
  {
    iconId: "javascript",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    skillName: "JavaScript",
  },
  {
    iconId: "react",
    width: "113",
    height: "120",
    viewBox: "0 0 120 101",
    skillName: "React",
  },
  {
    iconId: "redux",
    width: "105",
    height: "120",
    viewBox: "0 0 105 100",
    skillName: "Redux",
  },
  {
    iconId: "bootstrap",
    width: "88",
    height: "120",
    viewBox: "0 0 88 87",
    skillName: "Bootstrap",
  },
  {
    iconId: "tailwind",
    width: "131",
    height: "120",
    viewBox: "0 0 131 131",
    skillName: "Tailwind",
  },
  {
    iconId: "sass",
    width: "120",
    height: "120",
    viewBox: "0 0 113 120",
    skillName: "SASS",
  },
  {
    iconId: "git",
    width: "105",
    height: "120",
    viewBox: "0 0 105 105",
    skillName: "Git",
  },
  {
    src: styledComponents,
    alt: "styled-components",
    skillName: "Styled",
  },
  {
    iconId: "vscode",
    width: "112",
    height: "120",
    viewBox: "0 0 112 112",
    skillName: "VS Code",
  },
  {
    src: GitHub,
    alt: "styled-components",
    skillName: "GitHub",
  },
];

export const Skill = () => {
  return (
    <S.Skill>
      {skillData.map((s: SkillItemType, index) => (
        <S.SkillItem key={index}>
          {s.src ? (
            <S.SkillImage src={s.src} alt={s.alt || s.skillName} />
          ) : s.iconId ? (
            <Icon
              iconId={s.iconId}
              width={s.width || "120"}
              height={s.height || "120"}
              viewBox={s.viewBox || "0 0 120 120"}
            />
          ) : null}
          <S.SkillName>{s.skillName}</S.SkillName>
        </S.SkillItem>
      ))}
    </S.Skill>
  );
};
