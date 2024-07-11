import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user from '../../assets/image-Icons/user.png';





function Testimonial() {
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
        slidesToShow: 2,
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
                    <h2>Testimonials</h2>
                    <h5>What Our Client Says</h5>
                </div>
                <Slider {...settings} className="projectSlider">
                    <div className="testimonialBox">
                        <div className="testimoniaBoxCon">
                            <h4>“ Best software agency in the new world ”</h4>
                            <p>Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.</p>
                            <div className='testimonialuserrattings'>
                                <div className="testimonialuser">
                                    <img src={user} alt="user" />
                                    <div>
                                        <h4>Kristin Watson</h4>
                                        <p>Marketing Coordinator</p>
                                    </div>

                                </div>
                                <div className="testimonialrattigs">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonialBox">
                        <div className="testimoniaBoxCon">
                            <h4>“ Best software agency in the new world ”</h4>
                            <p>Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.</p>
                            <div className='testimonialuserrattings'>
                                <div className="testimonialuser">
                                    <img src={user} alt="user" />
                                    <div>
                                        <h4>Kristin Watson</h4>
                                        <p>Marketing Coordinator</p>
                                    </div>

                                </div>
                                <div className="testimonialrattigs">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonialBox">
                        <div className="testimoniaBoxCon">
                            <h4>“ Best software agency in the new world ”</h4>
                            <p>Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.</p>
                            <div className='testimonialuserrattings'>
                                <div className="testimonialuser">
                                    <img src={user} alt="user" />
                                    <div>
                                        <h4>Kristin Watson</h4>
                                        <p>Marketing Coordinator</p>
                                    </div>

                                </div>
                                <div className="testimonialrattigs">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonialBox">
                        <div className="testimoniaBoxCon">
                            <h4>“ Best software agency in the new world ”</h4>
                            <p>Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.</p>
                            <div className='testimonialuserrattings'>
                                <div className="testimonialuser">
                                    <img src={user} alt="user" />
                                    <div>
                                        <h4>Kristin Watson</h4>
                                        <p>Marketing Coordinator</p>
                                    </div>

                                </div>
                                <div className="testimonialrattigs">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
}

export default Testimonial