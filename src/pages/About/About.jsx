
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Include/Header';
import Footer from '../../components/Include/Footer';
import Topheader from '../../components/Include/Topheader';
import AboutSection from '../../components/homeComponents/AboutSection';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About D&D Learning</title>
      </Helmet>
      <Topheader />
      <Header />
      <div className="">
        <Breadcrumbs />
        <AboutSection />
      </div>

      <Footer />
    </div>
  )
}
