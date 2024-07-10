import React, { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import agriculture from '../../assets/Stakeholder/agriculture.png';
import forest_department from '../../assets/Stakeholder/forest_department.png';
import labour_department from '../../assets/Stakeholder/labour_department.png';
import tidc_logo from '../../assets/Stakeholder/tidc_logo.png';
import tribal_welfare from '../../assets/Stakeholder/tribal_welfare.png';
import soffed from '../../assets/Stakeholder/soffed.png';
import cbclister from '../../assets/Stakeholder/cbclister.png';

function Stakeholder() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div ref={sectionRef} className="stakeholderSection conSection">
            <div className="container">
                <div className="stakeholder">
                    <div className="stakeholderTitle">
                        <h2 ref={titleRef}>Significant <span>Stakeholders</span></h2>
                        <Slider {...settings} className="stakeholderSlider">
                            <div>
                                <img src={labour_department} alt="" />
                            </div>
                            <div>
                                <img src={agriculture} alt="Agriculture Department" />
                            </div>
                            <div>
                                <img src={forest_department} alt="" />
                            </div>
                            <div>
                                <img src={tidc_logo} alt="" />
                            </div>
                            <div>
                                <img src={tribal_welfare} alt="IIM" />
                            </div>
                            <div>
                                <img src={soffed} alt="MSME" />
                            </div>
                            <div>
                                <img src={cbclister} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stakeholder;
