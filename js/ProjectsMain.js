import ProjectsFunctionalities from "./ProjectsFunctionalities.js";
import CreateElements from "./CreateElements.js";

export default function ProjectsMain() {
  let projectDetails = [
    {
      projectsNo: "01",
      projectsName: "Sport LiveScores",
      projectsSummary:
        "Website that show the result of different sports, both the current and past results",
      projectsImg: "./img/Screenshot(366).png",
    },
    {
      projectsNo: "02",
      projectsName: "E-commerce Store",
      projectsSummary:
        "Website that allows you purchase items you need which also includes delivery services",
      projectsImg: "./img/Screenshot(368).png",
    },
    {
      projectsNo: "03",
      projectsName: "Food Website",
      projectsSummary:
        "Website that allows you order your favorite foods and browse through other amazing foods you might like to try out",
      projectsImg: "./img/Screenshot(370).png",
    },
    {
      projectsNo: "04",
      projectsName: "Real Estate",
      projectsSummary:
        "Website that allows you rent and purchase your dream home with ease",
      projectsImg: "./img/Screenshot(368).png",
    },
    {
      projectsNo: "05",
      projectsName: "Blog",
      projectsSummary:
        "Website that teaches in-depth javascript topics that you might have not come across before and prepare you for javascript interviews",
      projectsImg: "./img/Screenshot(366).png",
    },
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
              </div>
            `;
    return wrapper;
  });

  let imagesLargeView = projectDetails.map((detail) => {
    let image = CreateElements("img");
    image.src = detail.projectsImg;
    return image;
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
    (project) =>
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
        <img class="projects-main__image" src=${project.projectsImg} />`
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
