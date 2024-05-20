import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg border-top">
        <div class="container py-2 ">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="aboutus" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ABOUT US
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link class="dropdown-item" to="team">Team</Link></li>
                  <li class="nav-item dropdown"><Link class="dropdown-item " to="single">Single Service</Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link class="dropdown-item" to="team">Gallery</Link></li>
                      <li ><Link class="dropdown-item " to="single">Contacts</Link></li>
                    </ul>
                  </li>
                  <li><Link class="dropdown-item" to="blog">Blog</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="services">SERVICES</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="pricing">PRICING</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="gallery">GALLERY</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="testimonials">TESTIMONIALS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="faq">FAQ</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact">CONTACTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar