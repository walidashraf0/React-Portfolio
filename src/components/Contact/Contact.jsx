import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkndagqp");

  return (
    <section className="contact-us">
      <i className="fa-solid fa-envelope"></i>
      <span className="title">Contact Us</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        commodi ex accusamus voluptatibus eius provident sed, alias veritatis ab
        ad nemo tempore perferendis maiores. Nobis odit doloremque quaerat
        reprehenderit eius.
      </p>

      <div className="form-container d-flex align-items-center">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Meassge"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="btn submit-btn"
            disabled={state.submitting}>
            {state.submitting ? "Submitting......" : "Submit"}
          </button>
          {state.succeeded ? (
            <p className="d-flex align-items-center" style={{ marginTop: "10px", fontSize: "18px" }}>
              <Lottie loop={false} style={{height: 55}} animationData={doneAnimation} />
              Message has been sent successfully
            </p>
          ) : (
            ""
          )}
        </form>

        <div className="animation d-flex">
        <Lottie className="contactanimation" style={{height: 380}} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
}
