import React from 'react';
import './../Componant/ProductBanner2.css'
import img1 from './../Assets/custom-products.png'
import img2 from './../Assets/your-products.png'
import img3 from './../Assets/fullfillment.png'
function banner () {
    return (
     <div>
     <div className='container2'>
        <div className='info-card'>
            <div>
                <img className='card-img1' src={img1} />
                <h4 className='subtitle'>CREATE</h4>
                <h3 className='card-heading'>custom products</h3>
                <p className='img-info'> Easily add your designs to a wide range of products using our free tools 
                </p>
            </div>

            <div>
                <img className='card-img1' src={img2} />
                <h4  className='subtitle'>SELL</h4>
                <h3 className='card-heading '>on your teams</h3>
                <p className='img-info'> your choose the products,sale price,and where to sell
                </p>
            </div>

            <div>
                <img className='card-img1' src={img3} />
                <h4  className='subtitle'>WE HANDLE</h4>
                <h3 className='card-heading'>fullfillment</h3>
                <p className='img-info'> Onece an order is placed,we automatically handle all the printing and delivery logistics.
                </p>
            </div>
        </div>

        
     </div>
     </div>
    );}
export default banner;