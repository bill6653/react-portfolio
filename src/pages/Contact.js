import React from "react";

import "../styles/contact.css";
const Contact = () => {
  return (
    <section className="section section-contact">
      <div className="section-contact__content container">
        <h2>Contact Me</h2>

        <form className="section-contact__form">
          <div className="section-contact__form-group">
            <label>Full name</label>
            <input type="text" placeholder="full name" />
          </div>
          <div className="section-contact__form-group">
            <label>Email Address</label>
            <input type="email" placeholder="eamil address" />
          </div>
          <div className="section-contact__form-group">
            <label>Message</label>
            <textarea type="text" placeholder="your message goes here" />
          </div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
