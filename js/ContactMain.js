import CreateElements from "./CreateElements.js";

export default function ContactMain() {
  const contactMain = CreateElements("div", "about-and-contact");
  contactMain.innerHTML = `
          <section class="about-me">
            <div class="about-me__header">About Me</div>
            <div class="about-me__skills">
              Interactive Frontend Web Developer
            </div>
            <div class="about-me__summary">
              <p class="about-me__summary__text">
                <span>
                  I'm Oluborode Peter, A frontend developer who loves
                  experimenting with frontend technologies and enjoys learning
                  more about javascript to fully understand it's weird parts.
                </span>
                <span>
                  When i'm not coding, i spend my time on the piano and also
                  study how the forex market works.
                </span>
                <span>
                  I'm currently available for remote works or freelance
                  opportunities.
                </span>
              </p>
            </div>
          </section>

          <section class="contact-container">
            <h2 class="contact-container__get-in-touch">
              Lets Build Something Unique
            </h2>
            <p class="contact-container__text">
              I'm currently available for job offers, Feel free to drop a mail
              here to get in touch with me or send an email to
              <span>peterdev@gmail.com</span>
            </p>

            <form class="contact-container__form" action="">
              <input
                class="contact-container__form__name"
                type="text"
                placeholder="Name"
              />
              <input
                class="contact-container__form__email"
                type="email"
                placeholder="Email"
              />
              <textarea
                class="contact-container__form__message"
                placeholder="Message"
                cols="30"
                rows="1"
              ></textarea>

              <div class="contact-container__form__btn-container">
                <input
                  class="contact-container__form__btn-container__submit"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </section>`;

  return contactMain;
}
