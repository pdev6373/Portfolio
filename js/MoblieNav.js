import CreateElements from "./CreateElements.js";
import SocialLinks from "./SocialLinks.js";

function CurrentPage(pathName) {
  return pathName == location.pathname
    ? "nav-social__nav__list__items__links nav-social__nav__list__items__links--current"
    : "nav-social__nav__list__items__links";
}

export default function MoblieNav() {
  const homeLink = CreateElements("button", CurrentPage("/"), "home");

  const homeListItem = CreateElements(
    "li",
    "nav-social__nav__list__items",
    homeLink
  );

  const projectsLink = CreateElements(
    "button",
    CurrentPage("/projects.html"),
    "projects"
  );

  const projectsListItem = CreateElements(
    "li",
    "nav-social__nav__list__items",
    projectsLink
  );

  const skillsLink = CreateElements(
    "button",
    CurrentPage("/skills.html"),
    "mySkills"
  );

  const skillsListItem = CreateElements(
    "li",
    "nav-social__nav__list__items",
    skillsLink
  );

  const contactLink = CreateElements(
    "button",
    CurrentPage("/contact.html"),
    "contact"
  );

  const contactListItem = CreateElements(
    "li",
    "nav-social__nav__list__items",
    contactLink
  );

  const list = CreateElements(
    "ul",
    "nav-social__nav__list",
    homeListItem,
    projectsListItem,
    skillsListItem,
    contactListItem
  );

  const nav = CreateElements("nav", "nav-social__nav", list);

  let movileNav = CreateElements("div", "nav-social", nav, SocialLinks());

  return movileNav;
}
