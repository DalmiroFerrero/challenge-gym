import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="info-contact">
        <h1>Contact Us</h1>
        <form>
          <input type="text" className='input-contact' placeholder="Full Name" required />
          <br />
          <input type="email" className='input-contact' placeholder="Type Your E-Mail" required />
          <br />
          <textarea placeholder="Write Here....." rows="3" cols="1" required />
          <br />

          <input type="submit" value="send" className="btn btn-contact" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
