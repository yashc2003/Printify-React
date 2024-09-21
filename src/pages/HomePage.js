import React from 'react';
import Navbar from '../Componant/Navbar';
import Banner from '../Componant/banner1';
import Banner2 from '../Componant/banner2';
import Product from '../Componant/ProductBanner';

function HomePage () {
    return (
        <div>
        <Navbar/>
        <Banner/>
        <Banner2/>
        <Product/>        
     </div>
    )
};


export default HomePage;