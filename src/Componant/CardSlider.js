// CardSlider.js
import React from "react";
import Slider from "react-slick";
import './../Componant/CardSlider.css'

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Robert A.Voltaire",
      role: "Store link",
      review:
        " Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ",
      rating: 5,
      image: "https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png",
    },
    
    {
        name: "Quinten Barney",
        role: "Etsy Merchant",
        review:
          "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
        rating: 5,
        image: "https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png",
      },
      {
        name: "Nikki",
        role: "Store link",
        review:
          "Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
        rating: 5,
        image: "https://printify.com/pfh/media/nikki-TJP4NANB.png",
      },
      {
        name: "Spencer, Brett, and Kyle",
        role: "Store link",
        review:
          " Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly. ",
        rating: 5,
        image: "https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png",
      },
    // Add more testimonials as needed
  ];

  return (
     <div>
      <div className="text-box">
        <h1 className="bolt-text">Trusted by over 8M sellers around the world</h1>
        <p className="side-para">Whether you are just getting started or run an enterprise-level e-commerce business, 
          we do everything we can to ensure a positive merchant experience.</p>
      </div>
     

    <div className="slider-container" style={{ padding: "20px" }}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card6" style={{ padding: "10px"}}>
            <div className="card-content6" style={{ background: "#fff",display:'flex', width:"350px", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ borderRadius: "20px", width: "70px", height: "70px", objectFit: "cover" }}
              />
              <div style={{ margin:'3px 10px' }} >
              <h3 style={{ fontSize:'20px' }}>{testimonial.name}</h3>
              <p style={{ color: "#4CAF50" }}>{testimonial.role}</p>
              <div style={{  color: "#FF9800" }}>
                {"★".repeat(testimonial.rating)}
              </div>
              </div>
              </div>
              <p style={{ width:'340px' }} >{testimonial.review}</p>
            
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CardSlider;
