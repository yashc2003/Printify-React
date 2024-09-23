import React from 'react';
import './../Componant/ProductBanner.css'
import products from'./../Assets/clothes-CMPWJ6JG.webp'
import TshartLogo from './../Assets/tshartcard.png'
function banner () {
    return (
     <div>
        <div className='container-3'>
        <div className='tshart-card1'>
            <img className='tshart-card1' src={products}/>
            <img className='tshart-logo' src={TshartLogo}/>
           </div>
            <div className='text-contain1'>
                <h1 className='heading1'>Easily add your design to a wide range of products</h1>
                <p className='sub-heading'>With our free design tools, you can easily add your custom designs to t-shirts,
                     mugs, phone cases, and hundreds of other products.</p>
                
                <h5 style={{margin:"0 140px"}} className='mt-3 text-success'>All products </h5>
            </div>
          
        </div>
     </div>
    );}
export default banner;