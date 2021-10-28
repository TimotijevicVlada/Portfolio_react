import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const [message, setMessage] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n58a1zi",
        "template_95entcp",
        formRef.current,
        "user_jWZd2H9LGZAs9mcY4SUYH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
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
            <h1>Get in touch</h1>
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
            <h1>Message me</h1>
            <div className="name_email">
              <div className="name">
                <input type="text" name="user_name" placeholder="Name" />
              </div>
              <div className="email">
                <input type="text" name="user_email" placeholder="Email" />
              </div>
            </div>
            <div className="subject">
              <input type="text" name="user_subject" placeholder="Subject" />
            </div>
            <div className="message">
              <textarea
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
    </div>
  );
};

export default Contact;
