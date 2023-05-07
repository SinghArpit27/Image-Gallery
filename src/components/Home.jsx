import React from 'react';
import Navbar from './Navbar';
import ReactImageGallery from './ReactImageGallery';
import Footer from './Footer';


const Home = () => {
  return (
    <>
      <Navbar />
      <h1 style={{textAlign:'center', marginTop: '6rem', marginBottom: '.7rem', fontSize: '2.2rem', color: '#11142d'}}>Random Images</h1>
      <ReactImageGallery />
      <Footer />
    </>
  );
}

export default Home;