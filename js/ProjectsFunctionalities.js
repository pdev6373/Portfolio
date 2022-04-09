export default function ProjectsFunctionalities(
  projectImg,
  projectDetails,
  projectMain,
  largeViewDetails,
  largeViewImage,
  smallView
) {
  let view = window.innerWidth > 730 ? "largeView" : "smallView";
  // PROJECT SCROLL
  if (window.innerWidth > 730) {
    projectImg.forEach((img, imgIndex) => {
      ["scroll", "resize"].forEach((evt) => {
        window.addEventListener(evt, () => {
          if (img.getBoundingClientRect().y <= 250) {
            projectDetails.forEach((details, detailsIndex) => {
              if (imgIndex === detailsIndex) {
                details.className = "projects-main__details-wrapper";
              } else {
                details.className = "invisible";
              }
            });
          } else {
            projectDetails.forEach((details) => {
              if (imgIndex === 0) {
                details.className = "invisible";
              }
            });
          }
        });
      });
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 730 && view == "largeView") {
      projectMain.innerHTML = null;
      projectMain.className = "projects-main__wrapper--small";
      projectMain.innerHTML = smallView.join("");
      view = "smallView";
    } else if (window.innerWidth > 730 && view == "smallView") {
      projectMain.innerHTML = null;
      projectMain.className = "projects-main__wrapper";
      projectMain.append(largeViewDetails, largeViewImage);
      view = "largeView";
    }
  });
}
