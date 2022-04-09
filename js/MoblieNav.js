import CreateElements from "./CreateElements.js";

function CurrentPage(pathName) {
  return pathName == location.pathname
    ? "nav-resume__nav__list__items__links nav-resume__nav__list__items__links--current"
    : "nav-resume__nav__list__items__links";
}

export default function MoblieNav() {
  const homeLink = CreateElements("button", CurrentPage("/"), "home");

  const homeListItem = CreateElements(
    "li",
    "nav-resume__nav__list__items",
    homeLink
  );

  const projectsLink = CreateElements(
    "button",
    CurrentPage("/projects.html"),
    "projects"
  );

  const projectsListItem = CreateElements(
    "li",
    "nav-resume__nav__list__items",
    projectsLink
  );

  const skillsLink = CreateElements(
    "button",
    CurrentPage("/skills.html"),
    "mySkills"
  );

  const skillsListItem = CreateElements(
    "li",
    "nav-resume__nav__list__items",
    skillsLink
  );

  const contactLink = CreateElements(
    "button",
    CurrentPage("/contact.html"),
    "contact"
  );

  const contactListItem = CreateElements(
    "li",
    "nav-resume__nav__list__items",
    contactLink
  );

  const list = CreateElements(
    "ul",
    "nav-resume__nav__list",
    homeListItem,
    projectsListItem,
    skillsListItem,
    contactListItem
  );

  const nav = CreateElements("nav", "nav-resume__nav", list);

  const resumeIcon = CreateElements("i", "fas fa-download");

  const resume = CreateElements(
    "button",
    "nav-resume__button__resume",
    resumeIcon,
    "Resume"
  );

  const resumeWrapper = CreateElements("div", "nav-resume__button", resume);

  let movileNav = CreateElements("div", "nav-resume", nav, resumeWrapper);

  return movileNav;
}
