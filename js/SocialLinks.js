import PathNames from "./PathNames.js";
import CreateElements from "./CreateElements.js";

function SocialLinksContinerClass() {
  const socialLinksContinerClasses = [
    "home-social-container",
    "projects-social-container",
    "skills-social-container",
    "contact-social-container",
  ];

  return socialLinksContinerClasses[
    PathNames().findIndex((pathName) => pathName == location.pathname)
  ];
}

export default function SocialLinks() {
  const line = CreateElements("div", "social-container__line");

  const githubIcon = CreateElements("i", "fab fa-github-square");

  const linkedinIcon = CreateElements("i", "fab fa-linkedin");

  const whatsappIcon = CreateElements("i", "fab fa-whatsapp-square");

  const githubLink = CreateElements(
    "a",
    "social-container__links-container__links social-container__links-container__links--github",
    githubIcon
  );

  const linkedinLink = CreateElements(
    "a",
    "social-container__links-container__links social-container__links-container__links--linkedin",
    linkedinIcon
  );

  const whatsappLink = CreateElements(
    "a",
    "social-container__links-container__links social-container__links-container__links--whatsapp",
    whatsappIcon
  );

  const linksWrapper = CreateElements(
    "div",
    "social-container__links-container",
    githubLink,
    linkedinLink,
    whatsappLink
  );

  const socialLinksContiner = CreateElements(
    "section",
    `social-container ${SocialLinksContinerClass()}`,
    line,
    linksWrapper
  );

  return socialLinksContiner;
}
