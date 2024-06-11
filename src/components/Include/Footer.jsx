import React from 'react';
import { Link } from 'react-router-dom';


import facebook from '../../assets/logo/facebook.png';
import twitter from '../../assets/logo/twitter.png';
import linkedin from '../../assets/logo/linkedin.png';
import instagram from '../../assets/logo/instagram.png';

export default function Footer() {
  return (
    <div className="footerSection">
      <div className='footerTopSection conSection'>
        <div className="container">
          <div className="footerTop">
            <div className="footerTopLogo">
              <h3>D&D <span>LEARNING</span>.</h3>
            </div>

            <div className="footerMenu">
              <h6>Quick Links</h6>
              <ul>
                <li>About Us</li>
                <li>All Services</li>
                <li>Our Team</li>
                <li>Our Projects</li>
              </ul>
            </div>
            <div className="footerMenu">
              <h6>Important Links</h6>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footerSocial">
              <div className="footerMenu">
                <h6>Follow Us</h6>
                <div className="socialFlex">
                  <div className="socialIconCon">
                    <img src={facebook} alt="fb logo" />
                  </div>
                  <div className="socialIconCon">
                    <img src={twitter} alt="fb logo" />
                  </div>
                  <div className="socialIconCon">
                    <img src={linkedin} alt="fb logo" />
                  </div>
                  <div className="socialIconCon">
                    <img src={instagram} alt="fb logo" />
                  </div>
                </div>
                <a href="mailto:example@example.com">example@example.com</a>
                <br />
                <a href="tel:+919865457667">+91 9865457667</a>
                <br />
                <a href="tel:+918897894657">+91 8897894657</a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
