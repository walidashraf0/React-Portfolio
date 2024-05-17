import "./Contact.css";

export default function Contact() {
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
      <div className="form-container d-flex">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Email Address</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Email Address"
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
          </div>
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </form>
        <div className="animation borders d-flex">
          <span>Animation</span>
        </div>
      </div>
    </section>
  );
}
