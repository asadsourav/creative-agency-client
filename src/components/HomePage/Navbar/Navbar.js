import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div class = ' mx-auto'>
            <nav class="navbar bg-brand navbar-expand-lg navbar-light py-3">
  <a class="navbar-brand" href="#"><img class="w-50 ml-5" src={logo} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mx-3" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3" href="#">Our team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3" href="#">Contact us</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <Link style={{ color: 'white', textDecoration: 'none' }} to='/login'>
      <button class="btn btn-dark my-2 px-5 " type="submit">Login</button>
      </Link>
    </form>
  </div>
</nav>
        </div>
    );
};

export default Navbar;