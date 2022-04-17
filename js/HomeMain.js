import HomeFunctionalities from "./HomeFunctionalities.js";
import CreateElements from "./CreateElements.js";
import ContactMain from "./ContactMain.js";
import SocialLinks from "./SocialLinks.js";

export default function HomeMain() {
  const myName = CreateElements("p", "main-content__my-name", "I'm Peter,");

  const whatiDoSmallView = `I'm A <span>Frontend</span> Developer`;
  const whatiDoLargeView = `I'm A <span>Frontend</span> Developer <br />
        Ready To Build You Amazing Websites`;
  const whatIDo = CreateElements("h1", "main-content__what-i-do");
  whatIDo.innerHTML = `${
    window.innerWidth > 510 ? whatiDoLargeView : whatiDoSmallView
  }`;

  const thin = CreateElements(
    "div",
    "main-content__summary__availability__thin main-content__summary__availability__ellipse"
  );
  const thick = CreateElements(
    "div",
    "main-content__summary__availability__thick main-content__summary__availability__ellipse"
  );
  const green = CreateElements(
    "div",
    "main-content__summary__availability__green main-content__summary__availability__ellipse"
  );
  const availabilityText = CreateElements(
    "div",
    "main-content__summary__availability__text"
  );
  availabilityText.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 400 400"
    >
      <defs>
        <path
        d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
          id="txt-path"
        ></path>
      </defs>

      <text
        fill="rgb(84, 165, 170)" 
        font-size="22"
        font-weight="600"
        opacity="0.9"
      >
        <textPath startOffset="220" xlink:href="#txt-path">
          available for work
        </textPath>
      </text>
    </svg>`;
  const availabilityDate = CreateElements(
    "div",
    "main-content__summary__availability__date"
  );
  availabilityDate.innerHTML = `<div class="main-content__summary__availability__date__day">
            ${
              new Date().getDate().toString().length > 1
                ? new Date().getDate()
                : `0${new Date().getDate()}`
            }
              <div
                class="main-content__summary__availability__date__day__month"
              >${
                [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "July",
                  "Aug",
                  "Sept",
                  "Oct",
                  "Nov",
                  "Dec",
                ][new Date().getMonth()]
              }</div>
          </div>`;
  const summaryAvailability = CreateElements(
    "div",
    "main-content__summary__availability",
    thin,
    thick,
    green,
    availabilityText,
    availabilityDate
  );
  const summaryText = CreateElements(
    "p",
    "main-content__summary__text",
    `I love creating websites with great user experience, I would love
          to help companies build interactive and high performant websites
          that users would love to be part of`
  );
  const summary = CreateElements(
    "div",
    "main-content__summary",
    summaryText,
    summaryAvailability
  );

  const buttonResumeIcon = CreateElements("i", "fas fa-download");
  const buttonResume = CreateElements(
    "button",
    "main-content__btn-container__resume-wrapper__resume",
    buttonResumeIcon,
    "Resume"
  );
  const buttonResumeWrapper = CreateElements(
    "a",
    "main-content__btn-container__resume-wrapper",
    buttonResume
  );
  buttonResumeWrapper.setAttribute("href", "./resume/peter.pdf");
  buttonResumeWrapper.setAttribute("download", "peters-resume");

  const buttonGetInTouch = CreateElements(
    "button",
    "main-content__btn-container__btn",
    "Get In Touch"
  );

  const buttonWrapper = CreateElements(
    "div",
    "main-content__btn-container",
    buttonGetInTouch,
    buttonResumeWrapper
  );

  const cancelIcon = CreateElements("div", "contact-main__close");
  cancelIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"/></svg>`;
  cancelIcon.addEventListener("click", () => {
    document.querySelector("body").prepend(SocialLinks());
    contact.style.display = "none";
  });

  const contact = CreateElements(
    "div",
    "contact-main",
    ContactMain(),
    cancelIcon
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1000) contact.style.display = "none";
  });

  buttonGetInTouch.addEventListener("click", () => {
    if (window.innerWidth > 1000) {
      document.querySelector(".home-social-container").remove();
      contact.style.display = "block";
    } else {
      const contactPage =
        document.querySelectorAll(".contact-main")[1].offsetTop;

      window.scrollTo({
        top: contactPage - 145,
        behavior: "smooth",
      });
    }
  });

  const homeMain = CreateElements(
    "section",
    "main-content",
    myName,
    whatIDo,
    summary,
    buttonWrapper,
    contact
  );

  HomeFunctionalities(whatIDo, whatiDoLargeView, whatiDoSmallView);

  return homeMain;
}
