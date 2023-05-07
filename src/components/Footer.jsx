import React from 'react';
import './Footer.css';
import { CgCopyright } from 'react-icons/cg';

const Footer = () => {
  return (
    <>
         <footer>
            <span>Created By <a href="https://singharpit.000webhostapp.com/" formTarget='_blank'>Arpit Singh</a> | <span className='footer-icon'><CgCopyright /></span> 2022 All rights
                reserved.</span>
        </footer>
    </>
  )
}

export default Footer;