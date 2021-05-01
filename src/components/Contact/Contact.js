import './Contact.css';
import React from 'react';
import { IoMailOpen } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const SendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="Contact">
      <div className="contact_container">
        <div className="contact_details">
          <h2 className="text-white">DON'T BE SHY !</h2>
          <p className="text-white">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className="contact_text">
            <div className="d-flex align-items-center mb-3">
              <IoMailOpen style={{color: 'orange', fontSize: '40px', marginRight: '10px'}}/>
              <div>
                <h3 className="mb-0">MAIL ME</h3>
                <p className="mb-0">ahnafabir313@gmail.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaPhoneAlt style={{ color: 'orange', fontSize: '37px', marginRight: '12px' }}/>
              <div>
                <h3 className="mb-0">CALL ME</h3>
                <p className="mb-0">+8801775390977</p>
              </div>
            </div>
          </div>
          <div className="contact_social_icons">
            <a href="https://www.linkedin.com/in/ahnafabir11/" target="blank" className="con_icn_container">
              <FaLinkedinIn className="contact_icon" />
            </a>
            <a href="https://www.facebook.com/ahnafabir11" target="blank" className="con_icn_container">
              <FaFacebook className="contact_icon" />
            </a>
            <a href="https://www.instagram.com/ahnafabir11/" target="blank" className="con_icn_container">
              <FaInstagram className="contact_icon" />
            </a>
          </div>
        </div>
        <div className="contact_form">
          <form className="contact_inputs_all" onSubmit={SendEmail}>
            <input className="inputfield" placeholder="Full Name" name="name"/>
            <input className="inputfield" type="email" placeholder="Email" name="email"/>
            <input className="inputfield" placeholder="Subject" name="subject"/>
            <textarea className="inputfield" placeholder="enter your message here ...." rows="7" name="message" />
            <button 
              className="form_btn"
              variant="outlined"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;