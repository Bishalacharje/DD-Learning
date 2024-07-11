import React from 'react';

import Header from '../../components/Include/Header';
import Footer from '../../components/Include/Footer';
import Topheader from '../../components/Include/Topheader';
import Herosection from '../../components/homeComponents/Herosection';
import AboutSection from '../../components/homeComponents/AboutSection';
import Recognitions from '../../components/homeComponents/Recognitions';
import Service from '../../components/homeComponents/Service';
import Stakeholder from '../../components/homeComponents/Stakeholder';
import ProjectSlider from '../../components/homeComponents/ProjectSlider';
import Team from '../../components/homeComponents/Team';
import Products from '../../components/homeComponents/Products';
import Testimonial from '../../components/homeComponents/Testimonial';





export default function home() {
    return (
        <div>
            <Topheader />
            <Header />
            <div className="homePage">
               <Herosection />
               <Service />
               <Stakeholder />
               <ProjectSlider />
               <AboutSection />
               <Team />
               <Products />
               <Testimonial />
               <Recognitions />
            </div>

            <Footer />
        </div>
    )
}
