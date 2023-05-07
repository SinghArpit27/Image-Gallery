import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
         <nav className='navbar'>
            <h3 className='logo'>image gallery</h3>
            <ul className= {isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <NavLink to="/" className="home"> <li>home</li> </NavLink>
                {/* <NavLink to="/category" className="category"> <li>category</li> </NavLink> */}
                <NavLink to="/about" className="about"> <li>about</li> </NavLink>
                <NavLink to="/contact" className="contact"> <li>contact</li> </NavLink>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? <CgClose /> : <CgMenuRightAlt />}
            </button>
        </nav>
    </>
  )
}

export default Navbar;