import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css'; 

function Contact() {
  const [state, handleSubmit] = useForm("xzzpnlrd");

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  if (state.succeeded) {
    return <p>Thanks for your message! I'll get back to you soon.</p>;
  }

  return (
    <section id="contact" className={styles.container}>
      {/* Intro line before the Contact header */}
      <p className={styles.introText}>
        Looking to collaborate? Let’s schedule a time to connect. Coffee's on me !
      </p>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="formGroup">
            <label htmlFor="name" hidden>
            Name
            </label>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            />
        </div>

        {/* Email Field */}
        <div className="formGroup">
            <label htmlFor="email" hidden>
            Email Address
            </label>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Field */}
        <div className="formGroup">
            <label htmlFor="message" hidden>
            Message
            </label>
            <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting} className="hover btn">
            Submit
        </button>
      </form>

      {/* Back to Top Button */}
      <button onClick={scrollToTop} className={styles.backToTop}>
        Back to Top
      </button>
    </section>
  );
}

export default Contact;
