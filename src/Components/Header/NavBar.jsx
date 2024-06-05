import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import logo from '../../Assets/images/HomeImage/MainLogo.png'

const NavBar = () => {
  const navItems = [
    {
      label: 'HOME',
      link: '/'
    },
    {
      label: 'ABOUT US',
      link: '/aboutus',
      dropdownItems: [
        {
          label: 'Team',
          link: '/team'
        },
        {
          label: 'Single Service',
          link: '/single'
        },
        {
          label: 'Blog',
          link: '/blog'
        }
      ]
    },
    {
      label: 'SERVICES',
      link: '/services'
    },
    {
      label: 'PRICING',
      link: '/pricing'
    },
    {
      label: 'GALLERY',
      link: '/gallery'
    },
    {
      label: 'TESTIMONIALS',
      link: '/testimonials'
    },
    {
      label: 'FAQ',
      link: '/faq'
    },
    {
      label: 'CONTACTS',
      link: '/contact'
    }
  ];

  return (
    <div>
  <nav className="navbar navbar-expand-lg border-top">
    <div className="container py-2">
      <div className="d-lg-none d-flex align-items-center">
        <img src={logo} alt="" className="img-fluid me-2" />
        <div className="d-flex flex-column lh-1">
          <span className='fs-6 fw-bolder'>PRESS PREFECT</span>
          <span className='fs-6'>Your Laundry Center</span>
        </div>
      </div>
      <div className="navbar-nav ms-auto d-lg-none">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100 justify-content-between">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.dropdownItems ? (
                  <div className="dropdown">
                    <Link
                      className="nav-link dropdown-toggle fs-6"
                      to={item.link}
                      id={`navbarDropdownMenuLink-${index}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.label}
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`navbarDropdownMenuLink-${index}`}
                    >
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <Link
                            className="dropdown-item fs-6"
                            to={dropdownItem.link}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    className={`nav-link fs-6 ${item.link === '/' ? 'active' : ''}`}
                    aria-current="page"
                    to={item.link}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
  );
};

export default NavBar;