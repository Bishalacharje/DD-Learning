import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../assets/logo/facebook.png';
import twitter from '../../assets/logo/twitter.png';
import linkedin from '../../assets/logo/linkedin.png';
import instagram from '../../assets/logo/instagram.png';
import user1 from '../../assets/Team/user1.png';

function Team() {
    const titleRef = useRef(null);
    const grid1Ref = useRef(null);
    const grid2Ref = useRef(null);
    const [isVisible, setIsVisible] = useState({
        title: false,
        grid1: false,
        grid2: false
    });

    useEffect(() => {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch (entry.target.dataset.animationTarget) {
                        case 'title':
                            setIsVisible(prevState => ({ ...prevState, title: true }));
                            observer.unobserve(entry.target);
                            break;
                        case 'grid1':
                            setIsVisible(prevState => ({ ...prevState, grid1: true }));
                            observer.unobserve(entry.target);
                            break;
                        case 'grid2':
                            setIsVisible(prevState => ({ ...prevState, grid2: true }));
                            observer.unobserve(entry.target);
                            break;
                        default:
                            break;
                    }
                }
            });
        }, options);

        if (titleRef.current) observer.observe(titleRef.current);
        if (grid1Ref.current) observer.observe(grid1Ref.current);
        if (grid2Ref.current) observer.observe(grid2Ref.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (grid1Ref.current) observer.unobserve(grid1Ref.current);
            if (grid2Ref.current) observer.unobserve(grid2Ref.current);
        };
    }, []);

    return (
        <div className="teamSection conSection">
            <div className="container">
                <div className={`teamTitle ${isVisible.title ? 'visible' : ''}`} ref={titleRef} data-animation-target="title">
                    <h2>Our <span>Team</span></h2>
                    <h5>Expert Team Member</h5>
                </div>
                <div className={`teamGrid teamGrid2 ${isVisible.grid1 ? 'visible' : ''}`} ref={grid1Ref} data-animation-target="grid1">
                    <div className="teamBox">
                        <div className="teamBoxCon">
                            <div className="teamImgCon">
                                <img src={user1} alt="User 1" />
                            </div>
                            <div className="teamTextcon">
                                <div className="teamSocial">
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={facebook} alt="fb logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={twitter} alt="twitter logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={linkedin} alt="linkedin logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={instagram} alt="instagram logo" />
                                    </Link>
                                </div>
                                <div className='teamText'>
                                    <p>Chief Executive</p>
                                    <h3>Savannah Nguyen</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teamBox">
                        <div className="teamBoxCon">
                            <div className="teamImgCon">
                                <img src={user1} alt="User 1" />
                            </div>
                            <div className="teamTextcon">
                                <div className="teamSocial">
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={facebook} alt="fb logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={twitter} alt="twitter logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={linkedin} alt="linkedin logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={instagram} alt="instagram logo" />
                                    </Link>
                                </div>
                                <div className='teamText'>
                                    <p>Chief Executive</p>
                                    <h3>Savannah Nguyen</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`teamGrid ${isVisible.grid2 ? 'visible' : ''}`} ref={grid2Ref} data-animation-target="grid2">
                    <div className="teamBox">
                        <div className="teamBoxCon">
                            <div className="teamImgCon">
                                <img src={user1} alt="User 1" />
                            </div>
                            <div className="teamTextcon">
                                <div className="teamSocial">
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={facebook} alt="fb logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={twitter} alt="twitter logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={linkedin} alt="linkedin logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={instagram} alt="instagram logo" />
                                    </Link>
                                </div>
                                <div className='teamText'>
                                    <p>Chief Executive</p>
                                    <h3>Savannah Nguyen</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teamBox">
                        <div className="teamBoxCon">
                            <div className="teamImgCon">
                                <img src={user1} alt="User 1" />
                            </div>
                            <div className="teamTextcon">
                                <div className="teamSocial">
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={facebook} alt="fb logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={twitter} alt="twitter logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={linkedin} alt="linkedin logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={instagram} alt="instagram logo" />
                                    </Link>
                                </div>
                                <div className='teamText'>
                                    <p>Chief Executive</p>
                                    <h3>Savannah Nguyen</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teamBox">
                        <div className="teamBoxCon">
                            <div className="teamImgCon">
                                <img src={user1} alt="User 1" />
                            </div>
                            <div className="teamTextcon">
                                <div className="teamSocial">
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={facebook} alt="fb logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={twitter} alt="twitter logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={linkedin} alt="linkedin logo" />
                                    </Link>
                                    <Link to="#" className='teamSocialLink'>
                                        <img src={instagram} alt="instagram logo" />
                                    </Link>
                                </div>
                                <div className='teamText'>
                                    <p>Chief Executive</p>
                                    <h3>Savannah Nguyen</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
