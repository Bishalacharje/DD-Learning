import React from 'react';

import Header from '../../components/Include/Header';
import Footer from '../../components/Include/Footer';
import Topheader from '../../components/Include/Topheader';
import Herosection from '../../components/homeComponents/Herosection';
import AboutSection from '../../components/homeComponents/AboutSection';
import Recognitions from '../../components/homeComponents/Recognitions';





export default function home() {
    return (
        <div>
            <Topheader />
            <Header />
            <div className="homePage">
               <Herosection />
               <AboutSection />
               <Recognitions />
            </div>

            <Footer />
        </div>
    )
}
