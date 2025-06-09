import React, { useRef } from "react";
import emailjs from "emailjs-com";


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userEmail = formData.get("email");

    emailjs
      .sendForm(
        'service_wxx639e',     // service ID
        'template_rfwdj0u',    // template ID
        form.current,
        'MRoGEDBg_tzmdHOnY'    // public API key
      )
      .then(
        (result) => {
          alert('Thank you for contacting InterviewPrep! Your query has been received and our team will get back to your Email within 2 business days.');
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label className="contact-label">Email Address:</label>
        <input type="email" name="email" required className="contact-input" />

        <label className="contact-label">Your Query:</label>
        <input type="text" name="query" required className="contact-input" />

        <label className="contact-label">Feedback:</label>
        <textarea name="feedback" rows="4" required className="contact-textarea" />

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
