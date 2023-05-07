import React from 'react';
import Navbar from './Navbar';
import './Contact.css';
import Footer from './Footer';


const Contact = () => {
  return (
    <div>  
        <Navbar />

        
        <section className="container">

        <div className="left">
          <p className='title'>Contact Me</p>
          <p className='sub-title'>Get in touch</p>
          <p className='author-details'>Email: singharpit0027@gmail.com</p>
          <p className='author-details'>Phone: +91 9369788354</p>
          <p className='contact-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum, repudiandae ex accusantium cupiditate aliquid ipsam.</p>
        </div>

        <div className="right">
            <form className='contact-form' action="https://formsubmit.co/singharpit2781999@gmail.com" method="post">
                <input type="text" name='Name' placeholder='Name' className='inp-field' id='name-inp-field' required />
                <input type="email" name='Email' placeholder='Email' className='inp-field' id='email-inp-field' required />
                <input type="text" name='Subject' placeholder='Subject' className='inp-field' id='subject-inp-field' required />
                <textarea name="Message" cols="30" rows="10" className='inp-field' id='message-inp-field' placeholder='Message' required ></textarea>
                <br />
                <input type="submit" value="contact" className='btn' formTarget='blank'/>
            </form>
        </div>
        </section>

        <Footer />
    </div>
  )
}

export default Contact;




































