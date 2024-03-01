import CreateElements from "./CreateElements.js";

// I started programming mid 2021 as an hobby.

export default function ContactMain() {
  const contactMain = CreateElements("div", "about-and-contact");
  contactMain.innerHTML = `
          <section class="about-me">
            <div class="about-me__header">About Me</div>
            <div class="about-me__skills">
              Interactive Software Web Developer
            </div>
            <div class="about-me__summary">
              <p class="about-me__summary__text">
                <span>
                I'm Oluborode Peter, A software developer who loves
                experimenting with different programming languages and concepts
                and enjoys solving problems with various technologies and
                programming tools.
                </span>
                <span>
                 When i'm not coding, i spend my time on the piano, and sometimes
                 creating forex bots.
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
            here to get in touch with me or contact me via the whatsapp icon.
            </p>

            <form class="contact-container__form" action="https://formspree.io/f/xpzbyrzr" method="POST">
              <input
              name='Name'
                class="contact-container__form__name"
                type="text"
                placeholder="Name"
                required
              />
              <input
                name='Email'
                class="contact-container__form__email"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
              name='Message'
                class="contact-container__form__message"
                placeholder="Message"
                cols="30"
                rows="1"
                required
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
