import SocialLinks from "./SocialLinks.js";
import Header from "./Header.js";
import HomeMain from "./HomeMain.js";
import ProjectsMain from "./ProjectsMain.js";
import SkillsMain from "./SkillsMain.js";
import SkillsFunctionalities from "./SkillsFunctionalities.js";
import ContactMain from "./ContactMain.js";

import PathNames from "./PathNames.js";
import CreateElements from "./CreateElements.js";
import ScrollToView from "./ScrollToView.js";
import MoblieNav from "./MoblieNav.js";

(function Base() {
  function largeScreen() {
    return window.innerWidth > 1000 ? true : false;
  }

  const body = document.querySelector("body");
  const pagesRotate = [0, 90, 180, 270];
  let currentPageSmallScreen = 0;
  let hasRotate = false;

  let isScreenLarge = largeScreen() ? true : false;

  function initialPage(path) {
    const pages = ["index", "projects", "skills", "contact"];
    return pages.find((page) => path.includes(page));
  }

  let currentBtnIndex;

  function previousBtnIndex() {
    return PathNames().findIndex((pathName) => pathName == location.pathname);
  }

  function pageLinkText(buttonText) {
    if (buttonText == "home") return "";
    if (buttonText == "mySkills") return "skills";
    return buttonText;
  }

  function contentToViewIndex() {
    return PathNames().findIndex((pathName) => pathName == location.pathname);
  }

  function scrollPage() {
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      const home = document.querySelector(".home-main").offsetTop;
      const projects = document.querySelector(".projects-main").offsetTop;
      const skills = document.querySelector(".skills-main").offsetTop;
      const contact = document.querySelectorAll(".contact-main")[1].offsetTop;

      let projectsValue;
      let skillsValue;

      if (window.innerWidth <= 600) {
        projectsValue = -130;
        skillsValue = -100;
      } else if (window.innerWidth <= 730) {
        projectsValue = -160;
        skillsValue = -80;
      } else if (window.innerWidth <= 800) {
        projectsValue = 50;
        skillsValue = -72;
      } else if (window.innerWidth <= 1000) {
        projectsValue = 200;
        skillsValue = -40;
      }

      let contentToView = contentToViewIndex();
      if (contentToView == 0) ScrollToView("/", home, -140);
      else if (contentToView == 1)
        ScrollToView("/projects.html", projects, projectsValue);
      else if (contentToView == 2)
        ScrollToView("/skills.html", skills, skillsValue);
      else if (contentToView == 3) ScrollToView("/contact.html", contact, -145);
    });
  }

  function pageInViewIndex() {
    return pagesRotate.findIndex(
      (pageRotate) => pageRotate == 0 || pageRotate % 360 == 0
    );
  }

  function previousPageAndLink(array, className) {
    window.addEventListener("popstate", () => {
      // array.forEach((btn) => {
      //   btn.classList.remove(className);

      //   if (btn.textContent.trim() != "home") {
      //     `/${pageLinkText(btn.textContent.trim())}.html` ==
      //       location.pathname && btn.classList.add(className);
      //   } else {
      //     "/" == location.pathname && btn.classList.add(className);
      //   }
      // });

      // let previousButtonIndex = previousBtnIndex();

      // if (largeScreen()) {
      //   if (previousButtonIndex == currentBtnIndex) return;
      //   else {
      //     if (previousButtonIndex < currentBtnIndex) {
      //       pagesRotate.forEach(
      //         (pageRotate, index, array) => (array[index] = pageRotate + 90)
      //       );
      //     }

      //     if (previousButtonIndex > currentBtnIndex) {
      //       pagesRotate.forEach(
      //         (pageRotate, index, array) => (array[index] = pageRotate - 90)
      //       );
      //     }
      //   }

      //   setMainContent(true);
      //   currentBtnIndex = previousButtonIndex;
      // } else {
      //   setTimeout(() => {
      //     scrollPage();
      //   }, 0);
      // }

      history.go(1); // to get better solution later, use react
    });
  }

  function currentPageAndLink(array, index, btn, className) {
    array.forEach((btn, btnIndex) =>
      btnIndex != index
        ? btn.classList.remove(className)
        : btn.classList.add(className)
    );

    history.pushState(
      { page: pageLinkText(btn.textContent.trim()) },
      pageLinkText(btn.textContent.trim()),
      PathNames()[index]
    );
  }

  // --------------------------------------------------------

  let pages = Array.from(document.querySelectorAll(".page"));

  const pagesContent = [HomeMain, ProjectsMain, SkillsMain, ContactMain];

  const pageInView = ["page--one", "page--two", "page--three", "page--four"];

  const mainClass = [
    "home-main",
    "projects-main",
    "skills-main",
    "contact-main",
  ];

  function headerNavLinksClick() {
    document
      .querySelectorAll(".header__nav__list__items__links")
      .forEach((btn, index, array) => {
        btn.addEventListener("click", () => {
          let previousButtonIndex = previousBtnIndex();
          currentBtnIndex = index;

          if (previousButtonIndex == index) return;
          else {
            if (previousButtonIndex > index) {
              pagesRotate.forEach(
                (pageRotate, index, array) => (array[index] = pageRotate + 90)
              );
            } else {
              pagesRotate.forEach(
                (pageRotate, index, array) => (array[index] = pageRotate - 90)
              );
            }

            let pageViewIndex = pageInViewIndex();

            pages[pageViewIndex].scrollTo(0, 0);
            pages[pageViewIndex].innerHTML = null;
            pages[
              pageViewIndex
            ].className = `page ${pageInView[pageViewIndex]} ${mainClass[index]}`;
            if (index == 2) {
              pages[pageViewIndex].append(...pagesContent[2]());
              SkillsFunctionalities(
                document.querySelectorAll(".wheel__content__inner")
              );
            } else pages[pageViewIndex].append(pagesContent[index]());

            currentPageAndLink(
              array,
              index,
              btn,
              "header__nav__list__items__links--current"
            );

            setMainContent(true);
          }

          array.forEach((btn) => {
            btn.disabled = true;
            setTimeout(() => (btn.disabled = false), 1100);
          });
        });
      });
  }

  function headerNavLinksClickMobile() {
    document
      .querySelector(".header__hamburger")
      .addEventListener("click", () => {
        if (hasRotate) return;

        if (currentPageSmallScreen == 0) {
          pagesRotate.forEach(
            (pageRotate, index, array) => (array[index] = pageRotate - 90)
          );

          currentPageSmallScreen = 1;
        } else {
          pagesRotate.forEach(
            (pageRotate, index, array) => (array[index] = pageRotate + 90)
          );

          currentPageSmallScreen = 0;
        }

        hasRotate = true;
        setTimeout(() => (hasRotate = false), 550);

        setMainContent(false);
      });

    document
      .querySelectorAll(".nav-social__nav__list__items__links")
      .forEach((link, linkIndex, array) => {
        link.addEventListener("click", () => {
          pagesRotate.forEach(
            (pageRotate, index, array) => (array[index] = pageRotate + 90)
          );

          currentPageAndLink(
            array,
            linkIndex,
            link,
            "nav-social__nav__list__items__links--current"
          );

          currentPageSmallScreen = 0;

          setMainContent(false);
        });
      });
  }

  function setMainContent(largeScreen) {
    const header = document.querySelector(".header");
    const socialContainer = document.querySelector(".social-container");
    const content = document.querySelector(".content");
    let pageInView = pageInViewIndex();

    content.classList.add("content--perspective");
    header.style.borderRight = "none";

    Object.assign(body.style, {
      overflow: "hidden",
    });
    pages.forEach((page) => {
      Object.assign(page.style, {
        overflow: "hidden",
        height: "100vh",
        borderInline: `${
          largeScreen
            ? "2px solid rgb(8, 51, 8)"
            : "1px solid rgba(84, 110, 112, 0.1)"
        }`,
      });
    });

    if (largeScreen) {
      socialContainer && socialContainer.remove();
    }

    pages.map((page, pageIndex) => {
      page.style.transform = `rotateY(-90deg) translateX(-50%) rotateY(${pagesRotate[pageIndex]}deg) translateX(50%) rotateY(90deg)`;
    });

    setTimeout(() => {
      content.classList.remove("content--perspective");

      Object.assign(body.style, {
        overflow: "visible",
      });

      pages.forEach((page) => {
        Object.assign(page.style, {
          borderInline: "none",
        });
      });

      Object.assign(pages[pageInView].style, {
        height: "auto",
        overflow: "visible",
      });

      if (largeScreen) {
        window.scrollTo(0, 0);
        header.style.borderRight = "2px solid rgb(8, 51, 8)";
        body.prepend(SocialLinks());
      } else {
        scrollPage();
      }
    }, `${largeScreen ? 1100 : 550}`);
  }

  ["load", "resize"].forEach((evt, eventsIndex) => {
    window.addEventListener(evt, () => {
      if (eventsIndex == 0) {
        window.scrollTo(0, 0);
        body.prepend(Header(), SocialLinks());

        sessionStorage.setItem("initialPath", location.pathname);
        history.replaceState(
          { page: initialPage(sessionStorage.getItem("initialPath")) },
          "Default state",
          sessionStorage.getItem("initialPath")
        );

        if (largeScreen()) {
          let contentIndex = contentToViewIndex();
          let pageIndex = pageInViewIndex();

          pages[
            pageIndex
          ].className = `page ${pageInView[pageIndex]} ${mainClass[contentIndex]}`;
          if (contentIndex == 2) {
            pages[pageIndex].append(...pagesContent[2]());
            SkillsFunctionalities(
              document.querySelectorAll(".wheel__content__inner")
            );
          } else pages[pageIndex].append(pagesContent[contentIndex]());

          headerNavLinksClick();

          previousPageAndLink(
            document.querySelectorAll(".header__nav__list__items__links"),
            "header__nav__list__items__links--current"
          );
        } else {
          let allPages = mainClass.map((pageClass, index) => {
            if (index == 2)
              return CreateElements("div", pageClass, ...pagesContent[2]());
            else return CreateElements("div", pageClass, pagesContent[index]());
          });

          pages[pageInViewIndex()].append(...allPages);
          SkillsFunctionalities(
            document.querySelectorAll(".wheel__content__inner")
          );
          pages[1].append(MoblieNav());

          previousPageAndLink(
            document.querySelectorAll(".nav-social__nav__list__items__links"),
            "nav-social__nav__list__items__links--current"
          );

          scrollPage();
          headerNavLinksClickMobile();
        }
      } else {
        if (largeScreen() && !isScreenLarge) {
          const header = document.querySelector(".header");
          const socialContainer = document.querySelector(".social-container");
          let pageIndex = pageInViewIndex();
          let contentIndex = contentToViewIndex();

          window.scrollTo(0, 0);
          socialContainer.remove();
          header.remove();
          body.prepend(Header(), SocialLinks());
          header.style.borderRight = "2px solid rgb(8, 51, 8)";
          pages.forEach((page, index) => {
            page.innerHTML = null;
            page.className = `page ${pageInView[index]}`;
          });

          pages[
            pageIndex
          ].className = `page ${pageInView[pageIndex]} ${mainClass[contentIndex]}`;
          if (contentIndex == 2) {
            pages[pageIndex].append(...pagesContent[2]());
            SkillsFunctionalities(
              document.querySelectorAll(".wheel__content__inner")
            );
          } else pages[pageIndex].append(pagesContent[contentIndex]());

          previousPageAndLink(
            document.querySelectorAll(".header__nav__list__items__links"),
            "header__nav__list__items__links--current"
          );

          headerNavLinksClick();
          isScreenLarge = true;
        } else if (!largeScreen() && isScreenLarge) {
          currentPageSmallScreen = 0;
          const header = document.querySelector(".header");
          const socialContainer = document.querySelector(".social-container");
          socialContainer.remove();
          header.remove();
          body.prepend(Header(), SocialLinks());
          let pageIndex = pageInViewIndex();
          let allPages = mainClass.map((pageClass, index) => {
            if (index == 2)
              return CreateElements("div", pageClass, ...pagesContent[2]());
            else return CreateElements("div", pageClass, pagesContent[index]());
          });

          header.style.borderRight = "none";
          pages.forEach((page, index) => {
            page.innerHTML = null;
            page.className = `page ${pageInView[index]}`;
          });

          pages[pageIndex].append(...allPages);
          SkillsFunctionalities(
            document.querySelectorAll(".wheel__content__inner")
          );
          pages[pageIndex < 3 ? pageIndex + 1 : 0].append(MoblieNav());

          previousPageAndLink(
            document.querySelectorAll(".nav-social__nav__list__items__links"),
            "nav-social__nav__list__items__links--current"
          );

          scrollPage();
          headerNavLinksClickMobile();
          isScreenLarge = false;
        }
      }
    });
  });
})();
