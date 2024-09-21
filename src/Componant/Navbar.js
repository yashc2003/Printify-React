import React from 'react';
import './../Componant/Navbar.css'
import Logo from './../Assets/logo-full.svg'
function Navbar () {
    return (
        <div>
        <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
     <img className='logo' src={Logo}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  " aria-current="page" href=".">Catalog</a>
        </li>
    
        <li class="nav-item dropdown">
          <a class="nav-link ms-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            How it Work
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">How Printify Works</a></li>
            <li><a class="dropdown-item" href="#">Print On Demand</a></li>
            <li><a class="dropdown-item" href=".">Printify Quality Promise</a></li>
            <li><a class="dropdown-item" href="#">What to Sell?</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="#">Blog</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link ms-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sevices
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Printify Studio</a></li>
            <li><a class="dropdown-item" href="#">Printify Express Delivery</a></li>
            <li><a class="dropdown-item" href=".">Transfer Products</a></li>
            <li><a class="dropdown-item" href="#">Order In Bulk</a></li>
            <li><a class="dropdown-item" href="#">Experts Program</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link ms-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User-cases
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Merch for Fans</a></li>
            <li><a class="dropdown-item" href="#">Merch for eCommerce</a></li>
            <li><a class="dropdown-item" href=".">Merch for Enterprises</a></li>
            <li><a class="dropdown-item" href="#">Grow Your Store</a></li>
          
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link ms-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Need-felp?
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Help-Center</a></li>
            <li><a class="dropdown-item" href="#">Contacts</a></li>
            <li><a class="dropdown-item" href=".">My Requests</a></li>
          
          </ul>
        </li>
      </ul>

        <button class="btn btn-outline-success " type="submit">Log in</button>
  
        <button class="btn btn-success ms-3 me-5" type="submit">Sign up</button>
  
    </div>
  </div>
</nav>
        </div>
    )
};


export default Navbar;