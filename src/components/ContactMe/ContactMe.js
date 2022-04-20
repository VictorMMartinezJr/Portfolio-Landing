import "./ContactMe.css";
import Stars from "../Stars/Stars";
import MainButton from "../MainButton";

const ContactMe = () => {
  return (
    <section className="contact" id="contact">
      <Stars />
      <div className="contact-content">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-p">
          Feel free to contact me through email and I will get back to you as
          soon as possible
        </p>
        <MainButton
          type="main-btn secondary-btn"
          link="mailto: victormtzcodes@gmail.com"
          text="Email Me"
        />
      </div>
    </section>
  );
};

export default ContactMe;
