import CreateElements from "./CreateElements.js";

export default function SkillsMain() {
  const groups = ["Programmong Languages", "Frameworks", "Others"];

  const skillsMain = groups.map((group) => {
    const text = CreateElements("div", "wheel__content__text", group);
    const inner = CreateElements("div", "wheel__content__inner");

    const wheelContent = CreateElements("div", "wheel__content", text, inner);

    return wheelContent;
  });

  return skillsMain;
}
