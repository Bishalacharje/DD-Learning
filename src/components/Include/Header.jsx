import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/image-Icons/search.png';
import menu from '../../assets/image-Icons/menu.png';

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerSection = document.querySelector('.headerSection');
      if (window.scrollY > 100) {
        headerSection.classList.add('sticky');
      } else {
        headerSection.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='headerSection conSection'>
      <div className="container">
        <div className="navbar">
          <div className="navbarLeft">
            <ul className="navmenu">
              <Link to="/"><li>Home</li></Link>
              <li className="dropdown">
                About Us <i className="fa-solid fa-angle-down"></i>
                <ul className="submenu">
                <li><Link to="/about">About D&D Learning</Link></li>
                  <li><Link to="/team">Our Team</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </li>
              <li>Project</li>
              <li>Gallery</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="navbarRight">
            <button><img src={search} alt="search" /></button>
            <button className='menuBtn' onClick={toggleSidebar}><img src={menu} alt="menu" /></button>
          </div>
        </div>
      </div>
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <div className="sidebarContent">
          <button className='closeBtn' onClick={toggleSidebar}>×</button>
          
        </div>
      </div>
    </div>
  );
}
