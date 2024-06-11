import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

import ratingstart from '../../assets/image-pattern/rating-stars.png';
import mobiledev from '../../assets/image-pattern/mobile-development.png';
import useravatar from '../../assets/image-pattern/users-avatar.png';

function AboutSection() {
    const sectionRef = useRef(null);
    const counterRefs = useRef([]);

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

        counterRefs.current.forEach((ref, index) => {
            if (ref) {
                setTimeout(() => {
                    observer.observe(ref);
                }, index * 200); // Delay each subsequent element by 200ms
            }
        });

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            counterRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="aboutSection conSection" ref={sectionRef}>
            <div className="container">
                <div className="aboutGrid">
                    <div className="aboutGridLeft">
                        <div className="aboutheading">
                            <h3>Why</h3>
                            <h1>D&D Learning</h1>
                            <h6>Pvt Ltd</h6>
                        </div>
                        <p>
                            We are a team of professionals dedicated with a wealth of experience, creativity, and technical expertise for ensuring outstanding results. With the commitment to transparency and open communication, we are reaching out for exceptional service, innovative solutions, and a positive experience.
                        </p>
                        <p>If you have any questions or need further assistance, feel free to reach out. We look forward to a successful journey together!</p>
                        <Link to="/">
                            <button className="readMoreButton">Read More</button>
                        </Link>
                    </div>
                    <div className="aboutGridRight">
                        <div className="counterFlex" ref={(el) => counterRefs.current[0] = el}>
                            <div className="counterIcon">
                                <img src={mobiledev} alt="Mobile Development Icon" />
                            </div>
                            <div className='counterText'>
                                <h2>
                                    <CountUp end={125} duration={2.5} suffix="+" />
                                </h2>
                                <p>Develop Software</p>
                            </div>
                        </div>
                        <div className="counterFlex center" ref={(el) => counterRefs.current[1] = el}>
                            <div className="counterIcon">
                                <img src={useravatar} alt="User Avatar Icon" />
                            </div>
                            <div className='counterText'>
                                <h2>
                                    <CountUp end={64} duration={2.5} suffix="+" />
                                </h2>
                                <p>Global Clients</p>
                            </div>
                        </div>
                        <div className="counterFlex" ref={(el) => counterRefs.current[2] = el}>
                            <div className="counterIcon">
                                <img src={ratingstart} alt="Rating Stars Icon" />
                            </div>
                            <div className='counterText'>
                                <h2>
                                    <CountUp end={122} duration={2.5} suffix="+" />
                                </h2>
                                <p>Clients Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
