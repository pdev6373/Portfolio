export default function SkillsFunctionalities(wheels) {
  const programmingLanguages = [
    "Javascript",
    "Typescript",
    "Java",
    "Dart",
    "Kotlin",
    "Python",
    "Golang",
    "C#",
  ];

  const frameworks = [
    "CSS/Tailwind",
    "React",
    "Next.js",
    "React Native",
    "Angular",
    "Flutter",
    "Express",
    "Nest.js",
  ];

  const others = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Git/Github",
    "Graphql",
    "Supabase",
    "Docker",
  ];

  const skillsGroup = [
    programmingLanguages.reverse(),
    frameworks.reverse(),
    others.reverse(),
  ];

  wheels.forEach((wheel, wheelIndex) => {
    skillsGroup.forEach((group, groupIndex) => {
      if (wheelIndex == groupIndex) {
        const diameter = wheel.clientHeight;
        const radius = diameter / 2;
        const angle = 360 / group.length;
        const circumference = Math.PI * diameter;
        const height = circumference / group.length;

        group.map((skill, skillIndex) => {
          var transform = `rotateX(${
            angle * skillIndex
          }deg) translateZ(${radius}px)`;

          let elem = document.createElement("div");
          elem.className = "wheel__content__inner__segment";
          elem.innerHTML = `<span>${skill}</span>`;

          Object.assign(elem.style, {
            transform: transform,
            height: `${height}px`,
          });

          Object.assign(wheel.style, {
            transformOrigin: `50% calc(50% + ${height / 2}px)`,
            marginTop: `-${
              height * 0
            }px` /* negative margin here to keep the element into the center */,
          });

          wheel.append(elem);
        });
      }
    });
  });
}
