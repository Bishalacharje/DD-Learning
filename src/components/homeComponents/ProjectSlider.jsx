import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './ProjectSlider.css'; // Make sure to create this CSS file
import cbcluster from '../../assets/project/cbcluster.png';
import probasi from '../../assets/project/probasi.png';
import cmdashboard from '../../assets/project/cmdashboard.png';
import ddugky from '../../assets/project/ddugky.png';

function ProjectSlider() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div ref={sectionRef} className={`projectSliderSection conSection ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="projectSliderTitle">
                    <h2>Latest <span>Works</span></h2>
                    <h5>Check out some great case studies</h5>
                </div>
                <Slider {...settings} className="projectSlider">
                    <div className="projectBox">
                        <div className="projectBoxCon">
                            <div className="projectImageCon">
                                <img src={cbcluster} alt="" />
                            </div>
                            <div className="projectBoxOverlay">
                                <div className="projectText">
                                    <h5>Web Development</h5>
                                    <h2>Charilam Bamboo Cluster
                                    </h2>
                                    <p className="projectTextLines">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                                    <Link to="#" className='projectLink'>→</Link>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="projectBox">
                        <div className="projectBoxCon">
                            <div className="projectImageCon">
                                <img src={probasi} alt="" />
                            </div>
                            <div className="projectBoxOverlay">
                                <div className="projectText">
                                    <h5>Web Development</h5>
                                    <h2>Probasi Tripurabashi</h2>
                                    <p className="projectTextLines">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                                    <Link to="#" className='projectLink'>→</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="projectBox">
                        <div className="projectBoxCon">
                            <div className="projectImageCon">
                                <img src={cmdashboard} alt="" />
                            </div>
                            <div className="projectBoxOverlay">
                                <div className="projectText">
                                    <h5>Web Development</h5>
                                    <h2>CM Dashboard</h2>
                                    <p className="projectTextLines">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                                    <Link to="#" className='projectLink'>→</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="projectBox">
                        <div className="projectBoxCon">
                            <div className="projectImageCon">
                                <img src={ddugky} alt="" />
                            </div>
                            <div className="projectBoxOverlay">
                                <div className="projectText">
                                    <h5>Web Development</h5>
                                    <h2>DDUGKY Call Center</h2>
                                    <p className="projectTextLines">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
                                    <Link to="#" className='projectLink'>→</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
}

export default ProjectSlider;
