import React from 'react';
import './../Componant/banner3.css'
import Talk from './../Assets/talk-to-sales-N2GDBAGC.svg'
import img1 from './../Assets/wix-MWZCZDTE.svg'
import img2 from './../Assets/squarespace-FIBF2RIF.svg'
import img3 from './../Assets/big-commerce-EGSGKPYX.svg'
import img4 from './../Assets/woo-PGFAG65X.svg'
import img5 from './../Assets/presta-54F6AYUU.svg'
import img6 from './../Assets/etsy-MXXFYORZ.svg'
import img7 from './../Assets/shopify-3NAPXPBF.svg'
import img8 from './../Assets/more-integration-4S3FHLQZ.svg'
import img9 from './../Assets/printify-E3TBSF5R.svg'
function banner () {
    const myStyle={
        backgroundImage:'url($(Talk))',

    }
    return (
        <div>

<section className="integration-section">
<h2 className="subtitle5">Connect your store</h2>
<p className='small-letter'>Printify easily integrates with major e-commerce platforms and marketplaces</p>
<div className="integrations">
  <img style={{position:'absolute', margin:'100px 500px'}} src={img3} alt="BigCommerce" />
  <img style={{position:'absolute', margin:'60px 800px'}} src={img2} alt="Squarespace" />
  <img style={{position:'absolute', margin:'100px 1000px'}} src={img1}alt="Wix" />
  <img style={{position:'absolute', margin:'270px 950px'}} src={img4} alt="API" />
  <img style={{position:'absolute', margin:'400px 500px'}} src={img5} alt="Puffin" />
  <img style={{position:'absolute', margin:'200px 700px'}} className='bg-success ' src={img9} alt="Printify" />
  <img style={{position:'absolute', margin:'400px 900px'}} src={img6} alt="Etsy" />
  <img style={{position:'absolute', margin:'460px 700px'}} src={img7} alt="Shopify" />
  <img style={{position:'absolute', margin:'300px 400px', height:'60px', width:"60px"}} src={img8} alt="WooCommerce" />
</div>
</section>

     <div className='container4' >
        <div className='text-contain4'>
            <h3 className='subtitle4'>Are you a large business looking for custom solutions?</h3>
        </div>
        <div>
            <img className='talk-img' src={Talk}/> 
            </div>
            <button  className='btn4'>Talk to sales</button>
        
        
     </div>




</div>
);
}
export default banner;