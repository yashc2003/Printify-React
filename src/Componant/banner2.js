import React from 'react';
import './../Componant/banner2.css'
import img1 from'./../Assets/higher-profits.svg'
import img2 from './../Assets/robust-scaling.svg'
import img3 from './../Assets/best-selection.svg'
function banner () {
    return (
     <div className='container2'>
        <div className='info-card'>
            <div>
                <img className='card-img1' src={img1} />
                <h3 className='card-heading'>Higher Profits</h3>
                <p className='img-info'> We offer some of the lowest prices in the industry
                     because print providers continuously compete to win your business. 
                </p>
            </div>

            <div>
                <img className='card-img1' src={img2} />
                <h3 className='card-heading '>Robust Scaling</h3>
                <p className='img-info'> Easily handle peak holiday seasons, with our wide 
                    network of partners and automatic routing functionality. 
                </p>
            </div>

            <div>
                <img className='card-img1' src={img3} />
                <h3 className='card-heading'>Best Selection</h3>
                <p className='img-info'>  With 900+ products and top quality brands, you can 
                    choose the best products for your business.
                </p>
            </div>
        </div>

        
     </div>
    );}
export default banner;