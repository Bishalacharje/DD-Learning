import React from 'react';
import { useEffect, useRef } from 'react';
import assamdowntown from '../../assets/Recognitions/assam-downtown.png';
import aws from '../../assets/Recognitions/aws.png';
import corporateaffairs from '../../assets/Recognitions/corporate-affairs.png';
import iim from '../../assets/Recognitions/iim.png';
import itdep from '../../assets/Recognitions/it-dep.png';
import meity from '../../assets/Recognitions/meity.png';
import msme from '../../assets/Recognitions/msme.png';
import startupindia from '../../assets/Recognitions/startup-india.png';
import startuptripura from '../../assets/Recognitions/startup-tripura.png';


function Recognitions() {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

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

        if (topRef.current) observer.observe(topRef.current);
        if (bottomRef.current) observer.observe(bottomRef.current);

        return () => {
            if (topRef.current) observer.unobserve(topRef.current);
            if (bottomRef.current) observer.unobserve(bottomRef.current);
        };
    }, []);

    return (
        <div className="recognitionSection conSection">
            <div className="container">
                <h2>Our <span>Recognitions</span></h2>
                <div className="recognitionFlex top" ref={topRef}>
                    <div className="recognitionIcon">
                        <img src={corporateaffairs} alt="Corporate Affairs" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={itdep} alt="IT Department" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={meity} alt="Meity" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={startuptripura} alt="Startup Tripura" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={iim} alt="IIM" />
                    </div>
                </div>
                <div className="recognitionFlex" ref={bottomRef}>
                    <div className="recognitionIcon">
                        <img src={msme} alt="MSME" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={startupindia} alt="Startup India" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={aws} alt="AWS" />
                    </div>
                    <div className="recognitionIcon">
                        <img src={assamdowntown} alt="Assam Downtown" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recognitions;
