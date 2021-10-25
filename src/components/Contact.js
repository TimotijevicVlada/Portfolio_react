import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="title">Contact me</div>
            <div className="content">
                <div className="contact_left">
                    <div className="get_in_touch"><h1>Get in touch</h1></div>
                    <div className="phone"><i class="fas fa-phone"></i>+381631188180</div>
                    <div className="email"><i class="fas fa-envelope"></i>timotijevicvlada@gmail.com</div>
                    <div className="location"><i class="fas fa-map-marker-alt"></i>Belgrade, Serbia</div>
                </div>
                <div className="contact_right">
                    <div className="contact_form">
                        <h1>Message me</h1>
                        <div className="name_email">
                            <div className="name"><input type="text" placeholder="Name"/></div>
                            <div className="email"><input type="text" placeholder="Email"/></div>
                        </div>
                        <div className="subject"><input type="text" placeholder="Subject"/></div>
                        <div className="message"><textarea placeholder="Message..." name="message" cols="30" rows="5"></textarea></div>
                        <div className="btn">
                            <button>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
