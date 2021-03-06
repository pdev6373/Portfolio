export default function SkillsFunctionalities(wheels) {
  const stylingAndMarkup = [
    "html",
    "css",
    "sass",
    "less",
    "tailwind",
    "bootstrap",
    "materialize",
    "bulma",
    // "foundation"
  ];

  const functionality = [
    "javascript",
    "angular",
    "react",
    "next",
    "gatsby",
    "redux",
    "jQuery",
    "lodash",
    "underscore",
  ];

  const others = [
    "eleventy",
    "git",
    "github",
    "dev tools",
    "webpack",
    // "gulp",
    // "graphql",
    "axios",
    "shopify",
  ];

  const skillsGroup = [
    stylingAndMarkup.reverse(),
    functionality.reverse(),
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
