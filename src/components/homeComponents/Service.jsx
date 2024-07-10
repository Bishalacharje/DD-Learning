import React, { useEffect, useRef } from 'react';
import round5b from '../../assets/image-pattern/line-round-5b.png';
import icon19b from '../../assets/image-pattern/icon-19b.png';
import icon22b from '../../assets/image-pattern/icon-22b.png';
import application from '../../assets/image-pattern/application.png';
import icon20b from '../../assets/image-pattern/icon-20b.png';

function Service() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const serviceBoxRefs = useRef([]);

  serviceBoxRefs.current = [];

  const addToServiceBoxRefs = (el) => {
    if (el && !serviceBoxRefs.current.includes(el)) {
      serviceBoxRefs.current.push(el);
    }
  };

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    serviceBoxRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      serviceBoxRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="serviceSection conSection">
      <div className="container">
        <div className="serviceCon">
          <div className="serviceTitle">
            <h2 ref={headingRef}>Service <span>Experience</span> Areas</h2>
            <p ref={paragraphRef}>
            AI, ML, AR/VR, IoT, DevOps, and Cloud solutions for all businesses.
            </p>
          </div>

          <div className="serviceGrid">
            <div className="serviceBox" ref={addToServiceBoxRefs}>
              <img src={round5b} alt="" className='serviceBoxPattern' />
              <div className="serviceBoxCon">
                <img src={icon19b} alt="" />
                <h3>Govt. Departments & Enterprises</h3>
                <p>
                  D&D Learning has been a trusted partner for government enterprises, specialising in digital transformation, custom software development, and robust data security. We’ve empowered government agencies with citizen engagement solutions, data analytics, and efficient cloud migration.
                </p>
              </div>
            </div>
            <div className="serviceBox" ref={addToServiceBoxRefs}>
              <img src={round5b} alt="" className='serviceBoxPattern' />
              <div className="serviceBoxCon">
                <img src={icon22b} alt="" />
                <h3>Educational Institutes</h3>
                <p>
                  We have bolstered digital presence for educational institutions by creating user-friendly websites, mobile apps, and e-learning platforms. Our solutions enhance online course delivery, engage students effectively, and provide easy access to educational resources committing to support the digital evolution of education for seamless learning experiences.
                </p>
              </div>
            </div>
            <div className="serviceBox" ref={addToServiceBoxRefs}>
              <img src={round5b} alt="" className='serviceBoxPattern' />
              <div className="serviceBoxCon">
                <img src={application} alt="" />
                <h3>Application Developments</h3>
                <p>
                  Over the past five years, the team has honed its expertise in successfully crafting custom web and mobile applications across diverse industries, leveraging cutting-edge technologies to meet evolving client needs. Our track record reflects a commitment to excellence, user-centric design, and a deep understanding of market trends, ensuring the success of each project.
                </p>
              </div>
            </div>
            <div className="serviceBox" ref={addToServiceBoxRefs}>
              <img src={round5b} alt="" className='serviceBoxPattern' />
              <div className="serviceBoxCon">
                <img src={icon20b} alt="" />
                <h3>Branding and User Experience</h3>
                <p>
                  At D&D Learning, we seamlessly merge brand identity and user experience. Our expertise in crafting visually compelling and user-centric designs ensures a cohesive digital presence that resonates with audiences, elevating your brand to new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
