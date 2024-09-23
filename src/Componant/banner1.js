import React from 'react';
import './../Componant/banner1.css'
import next from'./../Assets/next.png'
import Female from './../Assets/Screenshot 2024-09-23 121101.png'
import Tshart1 from './../Assets/tshart1.png'
import Tshart2 from './../Assets/tshart2.png'
import Tshart3 from './../Assets/tshart3.png'
import Tshart4 from './../Assets/tshart4.png'
import Tshart5 from './../Assets/tshart5.png'
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
            

           <div  id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-inner">
               <div class="carousel-item active">
                  <img src={Tshart1} class="d-block" alt="..."/>
               </div>
               <div class="carousel-item ">
                  <img src={Tshart2} class="d-block" alt="..."/>
               </div>
               <div class="carousel-item ">
                 <img src={Tshart3} class="d-block" alt="..."/>
               </div>
               <div class="carousel-item ">
                 <img src={Tshart4} class="d-block" alt="..."/>
               </div>
               <div class="carousel-item ">
                 <img src={Tshart5} class="d-block"  alt="..."/>
               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
             </button>
         </div>
           
           </div>
           
           <img className='female-logo' src={Female}/>
          
        </div>
     </div>
    );}
export default banner;