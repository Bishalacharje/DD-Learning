import React from 'react';
import Slider from 'react-slick';
import bhavan from '../../assets/products/bhavan.png';
import bhomik from '../../assets/products/bhomik.png';
import ca_icon from '../../assets/products/ca.png';
import core_academy from '../../assets/products/core_academy.png';
import don_bosco_school from '../../assets/products/don_bosco_school.png';
import mathematica from '../../assets/products/mathematica.png';
import sk_sir_biology from '../../assets/products/sk_sir_biology.png';
import spectrum from '../../assets/products/spectrum.png';
import wishdom from '../../assets/products/wishdom.png';
import stydy_table from '../../assets/products/stydy_table.png';
import weekend_project from '../../assets/products/weekend_project.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Products() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="productSection conSection">
            <div className="container">
                <div className="productCon">
                    <div className="productGrid">
                        <div className="productGridLeft">
                            <div className="productTitle">
                                <h2>Our <span>Products</span></h2>
                                <h5>IN A WORLD WHERE DECISIONS ARE MADE IN A MATTER OF SECONDS, YOU ONLY GET ONE SHOT</h5>
                            </div>
                            <br /><br />
                            <h3>It is the foundation</h3>
                            <h3>for whatever comes <span>next</span></h3>
                            <br /><br />
                            <h4>A Pioneer in education</h4>
                            <h4>products with user experiences</h4>
                            <br />
                            <h4>and product base.</h4>
                            <h4>Recognised by many,</h4>
                            <h4>used by best the best</h4>

                            <div className="instituteSlider">
                                <Slider {...settings}>
                                    <div className="institute">
                                        <img src={bhavan} alt="Bhavan" />
                                    </div>
                                    <div className="institute">
                                        <img src={bhomik} alt="Bhomik" />
                                    </div>
                                    <div className="institute">
                                        <img src={ca_icon} alt="CA Icon" />
                                    </div>
                                    <div className="institute">
                                        <img src={core_academy} alt="Core Academy" />
                                    </div>
                                    <div className="institute">
                                        <img src={don_bosco_school} alt="Don Bosco School" />
                                    </div>
                                    <div className="institute">
                                        <img src={mathematica} alt="Mathematica" />
                                    </div>
                                    <div className="institute">
                                        <img src={sk_sir_biology} alt="SK Sir Biology" />
                                    </div>
                                    <div className="institute">
                                        <img src={spectrum} alt="Spectrum" />
                                    </div>
                                    <div className="institute">
                                        <img src={wishdom} alt="Wishdom" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="productGridRight">
                            <div className="productIcon first">
                                <img src={stydy_table} alt="" />
                                <a href="#">Visit</a>
                            </div>
                            <div className="productIcon">
                                <img src={weekend_project} alt="" />
                                <a href="#">Visit</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
