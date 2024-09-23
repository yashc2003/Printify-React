import React from "react";
import './../Componant/footer.css'; 
import Logo from './../Assets/logo-full.svg'
import img1 from './../Assets/facebook-icon.svg'
import img2 from './../Assets/instagram-icon.svg'
import img3 from './../Assets/linkedin-icon.svg'
import img4 from './../Assets/X-Logo-Green.svg'
import img5 from './../Assets/youtube-icon.svg'
import img6 from './../Assets/Tiktok-1.svg'
import img7 from './../Assets/reddit-icon.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-logo">
        <div>
            <img className="logo-footer" src={Logo}/>
        </div>
        
        <div className="footer-social">
          <a href="#"><img src={img1} className="fab fa-facebook"/></a>
          <a href="#"><img src={img2} className="fab fa-instagram"/></a>
          <a href="#"><img src={img3} className="fab fa-linkedin"/></a>
          <a href="#"><img src={img4} className="fab fa-x-twitter"/></a>
          <a href="#"><img src={img5} className="fab fa-youtube"/></a>
          <a href="#"><img src={img6} className="fab fa-tiktok"/></a>
          <a href="#"><img src={img7} className="fab fa-reddit"/></a>
        </div>
        </div>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Integrations</h4>
          <ul>
            <li><a href="#">Shopify</a></li>
            <li><a href="#">Etsy</a></li>
            <li><a href="#">eBay</a></li>
            <li><a href="#">Amazon</a></li>
            <li><a href="#">TikTok Shop</a></li>
            <li><a href="#">PrestaShop</a></li>
            <li><a href="#">BigCommerce</a></li>
            <li><a href="#">Wix</a></li>
            <li><a href="#">WooCommerce</a></li>
            <li><a href="#">Squarespace</a></li>
            <li><a href="#">Printify API</a></li>
            <li><a href="#">Printify Pop-Up Store</a></li>
            <li><a href="#">Shutterstock</a></li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4>Discover</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Etsy print-on-demand</a></li>
            <li><a href="#">Shopify print-on-demand</a></li>
            <li><a href="#">Woocommerce print-on-demand</a></li>
            <li><a href="#">Wix print-on-demand</a></li>
            <li><a href="#">Squarespace print-on-demand</a></li>
            <li><a href="#">Make Your Own Shirt</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Shipping Rates</a></li>
            <li><a href="#">Mockup Generator</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Start Selling</h4>
          <ul>
            <li><a href="#">Custom T-shirts</a></li>
            <li><a href="#">Custom Hoodies</a></li>
            <li><a href="#">Custom Mugs</a></li>
            <li><a href="#">Custom Socks</a></li>
            <li><a href="#">Custom Backpacks</a></li>
            <li><a href="#">Custom Branding</a></li>
            <li><a href="#">Sell on Etsy</a></li>
            <li><a href="#">Sell on Social Media</a></li>
            <li><a href="#">Free T-shirt Designs</a></li>
            <li><a href="#">TikTok Shop</a></li>
            <li><a href="#">PrestaShop</a></li>
            <li><a href="#">BigCommerce</a></li>
            <li><a href="#">Wix</a></li>
            <li><a href="#">WooCommerce</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Printify</h4>
          <ul>
            <li><a href="#">Print on Demand</a></li>
            <li><a href="#">Print Providers</a></li>
            <li><a href="#">Experts Program</a></li>
            <li><a href="#">Printify Express Delivery</a></li>
            <li><a href="#">Become a Partner</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Printify Quality Promise</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">TikTok Shop</a></li>
            <li><a href="#">PrestaShop</a></li>
            <li><a href="#">BigCommerce</a></li>
            <li><a href="#">Wix</a></li>
            <li><a href="#">WooCommerce</a></li>
          </ul>
        </div>
        </div>
        <div className="bottum-link">
            <a className="link" href="#">Intellectual Property Policy</a>
            <a className="link" href="#">Terms of Service</a>
            <a className="link" href="#">Privacy Policy</a>
            <a className="link" href="#">Security</a>
          <p className="mt-3">© 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
