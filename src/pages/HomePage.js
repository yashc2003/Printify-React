import React from 'react';
import Navbar from '../Componant/Navbar';
import Banner from '../Componant/banner1';
import Banner2 from '../Componant/banner2';
import Product from '../Componant/ProductBanner';
import Product2 from '../Componant/ProductBanner2';
import Banner3 from '../Componant/banner3'
import Footer from '../Componant/footer';
import Slider from '../Componant/CardSlider';

function HomePage () {
    return (
        <div>
        <Navbar/>
        <Banner/>
        <Banner2/>
        <Product/>
        <Product2/>     
        <Banner3/>
        <Slider/>
        <Footer/>

        <div className="App">
      <h1 style={{ textAlign: "center" }}>Testimonials</h1>
      <Slider />
    </div>
     </div>
    )
};


export default HomePage;