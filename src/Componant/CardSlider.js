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
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "",
      role: "",
      review:
        "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
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
        name: "Nikki",
        role: "Store link",
        review:
          "Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
        rating: 5,
        image: "https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png",
      },
    // Add more testimonials as needed
  ];

  return (
    <div className="slider-container" style={{ padding: "20px" }}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card" style={{ padding: "10px" }}>
            <div className="card-content" style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ borderRadius: "50%", width: "60px", height: "60px", objectFit: "cover" }}
              />
              <h3 style={{ margin: "10px 0" }}>{testimonial.name}</h3>
              <p style={{ color: "#4CAF50" }}>{testimonial.role}</p>
              <div style={{ margin: "10px 0", color: "#FF9800" }}>
                {"★".repeat(testimonial.rating)}
              </div>
              <p>{testimonial.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
