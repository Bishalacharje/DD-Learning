import React from 'react';
import Header from '../../components/Include/Header';
import Footer from '../../components/Include/Footer';
import Topheader from '../../components/Include/Topheader';

import pattern from '../../assets/image-pattern/pattern.png';
import pattern3 from '../../assets/image-pattern/pattern3.png';
// import patterncenter from '../../assets/image-pattern/pattern-center.png';

export default function home() {
    return (
        <div>
            <Topheader />
            <Header />
            <div className="homePage">
                <div className='heroSection conSection patternCon'>
                    <img className='patternImg' src={pattern} alt="" />
                    <img className='patternImg2' src={pattern3} alt="" />
                    {/* <img className='patternImgcenter' src={patterncenter} alt="" /> */}
                    <div className="container">

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
