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
    "main-content__btn-container__resume",
    buttonResumeIcon,
    "Resume"
  );
  const buttonGetInTouch = CreateElements(
    "button",
    "main-content__btn-container__btn",
    "Get In Touch"
  );

  const buttonWrapper = CreateElements(
    "div",
    "main-content__btn-container",
    buttonGetInTouch,
    buttonResume
  );

  const cancelIcon = CreateElements(
    "i",
    "fas fa-window-close contact-main__close"
  );

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
