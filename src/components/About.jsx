import React from 'react';
import Navbar from './Navbar';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { useNavigate } from 'react-router-dom';
import './About.css';
import Footer from './Footer';
import img from '../../public/images/about-img.png';

const images = [
  "https://picsum.photos/400/500",
  "https://picsum.photos/300/500",
  "https://picsum.photos/200/200",
  "https://picsum.photos/200/300",
  "https://picsum.photos/600/650",
  "https://picsum.photos/500/875",
]

const About = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => {
      navigate('/');
  }
  return (
    <>
        <Navbar />
        <section className="about-container">

          <div className="about-left">
            <div style={{padding: '10px'}} className='about-left-main-img'>
              <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                  <Masonry gutter='10px'>
                      {images.map((image, i) => (
                          <img
                              key={i}
                              src={image}
                              style={{width: "100%", display: "block"}}
                              alt=""
                          />
                      ))}
                  </Masonry>
              </ResponsiveMasonry>
            </div>
            <img src={img} alt="about-img" className='about-left-img' />
          </div>
          <div className="about-right">
            <h1>Beautiful Design</h1>
            <h3>Loaded with styles and layouts</h3>
            <p>The X3 website is highly customizable, with hundreds of style combinations to choose from. Select from a variety of skins, colors, layouts and fonts to create a truly unique website design. X3 also comes loaded with image gallery layouts including slideshow, columns, grids.</p>
            <button onClick={handleGoToContact} className='btn' >explore</button>
          </div>

         </section>
         <Footer />

     </>
  )
}

export default About;