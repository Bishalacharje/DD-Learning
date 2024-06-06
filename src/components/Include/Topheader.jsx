import React from 'react';
import timeIcons from '../../assets/image-Icons/time.png';
import locationIcons from '../../assets/image-Icons/location.png';
import callIcons from '../../assets/image-Icons/telephone.png';

function Topheader() {
  return (
    <div className='topheaderSection conSection'>
      <div className="container">
        <div className="topheader">
          <div className="headLogo">
            <h1>D&D <span>LEARNING</span></h1>
          </div>
          <div className="headcontact">
            <div className="headcontactItem">
              <img src={timeIcons} alt="" />
              <div>
                <p>Time</p>
                <h5>10AM - 07pm</h5>
              </div>
            </div>
            <div className="headcontactItem center">
              <img src={locationIcons} alt="" />
              <div>
                <p>Location</p>
                <h5>Agartala, Tripura, India</h5>
              </div>
            </div>
            <div className="headcontactItem">
              <img src={callIcons} alt="" />
              <div>
                <p>Phone</p>
                <h5>+91 8668490563 </h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Topheader