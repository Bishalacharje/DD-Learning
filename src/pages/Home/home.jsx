import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Include/Header';
import Footer from '../../components/Include/Footer';
import Topheader from '../../components/Include/Topheader';

import pattern from '../../assets/image-pattern/pattern.png';
import pattern3 from '../../assets/image-pattern/pattern3.png';
// import patterncenter from '../../assets/image-pattern/pattern-center.png';
import heroimage from '../../assets/image-pattern/heroimage.png';
import achivementImage from '../../assets/image-pattern/winner.png';

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
                    <div className="container heroContainer">
                        <div className="heroGrid">
                            <div className="heroGridLeft">
                                <h2>IT and Web Based  </h2>
                                <h2>Products and <span>Services</span></h2>
                                <h6>Focus on your core Business Activities,and let us Branding, Contents and IT services. </h6>

                                <Link to="/"><button>Get Our Quote</button></Link>
                            </div>
                            <div className="heroGridRight">
                                <img src={heroimage} alt="" />
                            </div>
                        </div>
                        <div className="achivementArea">
                            <div className="achivement">
                                <img src={achivementImage} alt="" />
                                <p>Best Startup Company, Tripura 2024</p>
                            </div>
                            <div className="achivement">
                                <img src={achivementImage} alt="" />
                                <p>AMAZON Sambhav, Top 100 pan India</p>
                            </div>
                            <div className="achivement">
                                <img src={achivementImage} alt="" />
                                <p>TIDE 2.0 Winner, Top 2 in NE</p>
                            </div>
                            <div className="achivement">
                                <img src={achivementImage} alt="" />
                                <p>Chunauti 2.0 Winner, STPI Top 100 Pan India</p>
                            </div>
                            <div className="achivement">
                                <img src={achivementImage} alt="" />
                                <p>NEDP IIM CIP Top 100 Pan India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
