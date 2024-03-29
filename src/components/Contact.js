import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = ({ nightMode }) => {

  const [message, setMessage] = useState(false);

  const formRef = useRef();

  const closeMessage = () => {
    const timeout = setTimeout(() => {
      setMessage(false);
    }, 2000)
    return () => clearTimeout(timeout);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_n58a1zi",
      "template_95entcp",
      formRef.current,
      "user_jWZd2H9LGZAs9mcY4SUYH"
    )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          closeMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="title">Contact me</div>
      <div className="content">
        <div className="contact_left">
          <div className="get_in_touch">
            <h2>Get in touch</h2>
          </div>
          <div className="phone">
            <i className="fas fa-phone"></i>+381631188180
          </div>
          <div className="email">
            <i className="fas fa-envelope"></i>timotijevicvlada@gmail.com
          </div>
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>Belgrade, Serbia
          </div>
        </div>
        <div className="contact_right">
          <form className="contact_form" ref={formRef} onSubmit={handleSubmit}>
            <h2>Message me</h2>
            <div className="name_email">
              <div className="name">
                <input className={!nightMode ? "" : "night"} type="text" name="user_name" placeholder="Name" />
              </div>
              <div className="email">
                <input className={!nightMode ? "" : "night"} type="text" name="user_email" placeholder="Email" />
              </div>
            </div>
            <div className="subject">
              <input className={!nightMode ? "" : "night"} type="text" name="user_subject" placeholder="Subject" />
            </div>
            <div className="message">
              <textarea
                className={!nightMode ? "" : "night"}
                name="user_msg"
                placeholder="Message..."
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="btn">
              <button>Send message</button>
              {message ? <span className="msg_successfull">Message sent successfully <i className="fas fa-check"></i></span> : ""}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
