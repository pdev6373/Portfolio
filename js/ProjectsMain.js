import ProjectsFunctionalities from "./ProjectsFunctionalities.js";
import CreateElements from "./CreateElements.js";

export default function ProjectsMain() {
  let projectDetails = [
    {
      projectsNo: "01",
      projectsName: "Foodcrib",
      projectsSummary:
        "Website that allows you order your favorite foods and browse through other amazing foods you might like to try out,",
      projectsTools: "developed with react, and sass.",
      projectsImg: "./img/project-one.png",
      github: "https://github.com/pdev6373/Foodcrib",
      site: "https://foodcrib.netlify.app",
    },
    {
      projectsNo: "02",
      projectsName: "LiveScores",
      projectsSummary:
        "( Uncompleted project ) Website that show the result of different sports, both the current and past results.",
      projectsTools: "",
      projectsImg: "./img/blank.png",
      // github: "",
      // site: "#",
    },
    // {
    //   projectsNo: "03",
    //   projectsName: "E-commerce Store",
    //   projectsSummary:
    //     "Website that allows you purchase items you need which also includes delivery services",
    //   projectsImg: "./img/project-one.png",
    // },
    // {
    //   projectsNo: "04",
    //   projectsName: "Real Estate",
    //   projectsSummary:
    //     "Website that allows you rent and purchase your dream home with ease",
    //   projectsImg: "./img/project-one.png",
    // },
    // {
    //   projectsNo: "05",
    //   projectsName: "Blog",
    //   projectsSummary:
    //     "Website that teaches in-depth javascript topics that you might have not come across before and prepare you for javascript interviews",
    //   projectsImg: "./img/Screenshot(366).png",
    // },
  ];

  let detailsLargeView = projectDetails.map((detail, index) => {
    let wrapper = CreateElements(
      "div",
      `${
        index == 0 && window.innerWidth > 1000
          ? "projects-main__details-wrapper"
          : "invisible"
      }`
    );
    wrapper.innerHTML = `
            <p class="projects-main__details-wrapper__number">${detail.projectsNo}</p>
              <div class="projects-main__details-wrapper__info">
                <h3 class="projects-main__details-wrapper__info__name">${detail.projectsName}</h3>
                <p class="projects-main__details-wrapper__info__summary">
                  ${detail.projectsSummary}
                </p>
                <p class="projects-main__details-wrapper__info__tools">${detail.projectsTools}</p>
              </div>
            `;
    return wrapper;
  });

  let imagesLargeView = projectDetails.map((detail) => {
    const buttonGithub = CreateElements(
      "a",
      "projects-main__img__button-wrapper__github",
      "view repo"
    );
    detail.github && buttonGithub.setAttribute("href", detail.github);
    detail.github && buttonGithub.setAttribute("target", "_blank");

    const buttonSite = CreateElements(
      "a",
      "projects-main__img__button-wrapper__site",
      "view site"
    );
    detail.site && buttonSite.setAttribute("href", detail.site);
    detail.site && buttonSite.setAttribute("target", "_blank");

    const buttonWrapper = CreateElements(
      "div",
      "projects-main__img__button-wrapper",
      buttonSite,
      buttonGithub
    );
    const image = CreateElements("img");

    image.src = detail.projectsImg;
    let imgWrapper = CreateElements("div", null, image, buttonWrapper);
    return imgWrapper;
  });

  let imagesWrapperLargeView = CreateElements(
    "div",
    "projects-main__img",
    ...imagesLargeView
  );
  let detailsWrapperLargeView = CreateElements(
    "div",
    "projects-main__details",
    ...detailsLargeView
  );
  let projectsSmallView = projectDetails.map(
    (project, index) =>
      `<div class="projects-main__number-name">
          <div class="projects-main__number-name__number">
            ${project.projectsNo}
          </div>
          <div class="projects-main__number-name__line">
          </div>
          <div class="projects-main__number-name__name">
            ${project.projectsName}
          </div>
        </div>
        <div class="projects-main__summary">
          ${project.projectsSummary}
        </div>
        <div class="projects-main__tools">
          ${project.projectsTools}
        </div>
        <div class="projects-main__img-wrapper">
          <img class="projects-main__img-wrapper__image" src=${
            project.projectsImg
          } />
          <div class="projects-main__img-wrapper__links">
          ${
            index
              ? `<a class="projects-main__img-wrapper__links__site">view site</a> 
            <a class="projects-main__img-wrapper__links__github">view repo</a>`
              : `<a class="projects-main__img-wrapper__links__site" href=${project.site} target="_blank">view site</a> 
            <a class="projects-main__img-wrapper__links__github" href=${project.github} target="_blank">view repo</a>`
          }
          </div>
        </div>
        `
  );
  let projectsMainSmallView = CreateElements(
    "div",
    "projects-main__wrapper--small"
  );
  projectsMainSmallView.innerHTML = projectsSmallView.join("");

  let projectsMain =
    window.innerWidth > 730
      ? CreateElements(
          "div",
          "projects-main__wrapper",
          detailsWrapperLargeView,
          imagesWrapperLargeView
        )
      : projectsMainSmallView;

  ProjectsFunctionalities(
    imagesLargeView,
    detailsLargeView,
    projectsMain,
    detailsWrapperLargeView,
    imagesWrapperLargeView,
    projectsSmallView
  );

  return projectsMain;
}
