import CreateElements from "./CreateElements.js";

function CurrentPage(pathName) {
  return pathName == location.pathname
    ? "header__nav__list__items__links header__nav__list__items__links--current"
    : "header__nav__list__items__links";
}

export default function Header() {
  const logo = CreateElements("img", "header__logo");
  logo.setAttribute("src", "./img/logo.svg");

  const homeLink = CreateElements("button", CurrentPage("/"), "home");

  const homeListItem = CreateElements(
    "li",
    "header__nav__list__items",
    homeLink
  );

  const projectsLink = CreateElements(
    "button",
    CurrentPage("/projects.html"),
    "projects"
  );

  const projectsListItem = CreateElements(
    "li",
    "header__nav__list__items",
    projectsLink
  );

  const skillsLink = CreateElements(
    "button",
    CurrentPage("/skills.html"),
    "mySkills"
  );

  const skillsListItem = CreateElements(
    "li",
    "header__nav__list__items",
    skillsLink
  );

  const contactLink = CreateElements(
    "button",
    CurrentPage("/contact.html"),
    "contact"
  );

  const contactListItem = CreateElements(
    "li",
    "header__nav__list__items",
    contactLink
  );

  const list = CreateElements(
    "ul",
    "header__nav__list",
    homeListItem,
    projectsListItem,
    skillsListItem,
    contactListItem
  );

  const nav = CreateElements("nav", "header__nav", list);

  const resumeIcon = CreateElements("i", "fas fa-download");

  const resume = CreateElements(
    "button",
    "header__button__resume",
    resumeIcon,
    "Resume"
  );

  const resumeWrapper = CreateElements("a", "header__button", resume);
  resumeWrapper.setAttribute("href", "./resume/peter_resume.pdf");
  resumeWrapper.setAttribute("download", "peters-resume");

  const hamburgerLine = CreateElements("div", "header__hamburger__line");

  const hamburger = CreateElements("div", "header__hamburger", hamburgerLine);

  const header = CreateElements(
    "header",
    "header",
    logo,
    nav,
    resumeWrapper,
    hamburger
  );

  return header;
}
