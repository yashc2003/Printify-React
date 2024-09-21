import React from 'react';
import './../Componant/banner1.css'
import next from'./../Assets/next.png'
import tshart from './../Assets/img_5.png'
function banner () {
    return (
     <div>
        <div className='container0'>
            <div className='text-contain'>
                <h1 className='heading'>Create and sell custom products</h1>
                <p><img className='next-img' src={next}/>100% Free to use </p>
                <p> <img className='next-img' src={next}/>900+ High-Quality Product</p>
                <p> <img className='next-img' src={next}/>laregest globle print network</p>
                <div className='btn-com'>
                    <button className='btn btn-success " type="submit'>Start for free</button>
                    <button className='btn btn-outline-success ms-5 " type="submit"'>How it works?</button>

                </div>
                <h5 className='mt-3 text-success'>Trusted by over 8M sellers around the world</h5>
            </div>
           <div>
            <img className='tshart-card' src={tshart}/>
           </div>
        </div>
     </div>
    );}
export default banner;