import React from 'react';
import './Hero.css'
import profile_img from '../../assets/abhi.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img style={{ width:"320px",height:"320px" }} src={profile_img} alt="" />
             <h1><span>I'm Abhishek Raval, </span>FullStack Developer Based In India</h1>
             <p>I am a fullstack Developer from Ahemdabad, India with 2 Year of experience in multiple companies like I-Flair Web Tech, Shiv Tech And MSP IT Concepts</p>
             <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50}  href='#contact'> Connect with me </AnchorLink></div>
                <div className="hero-resume">My Resume</div>
             </div>
        </div>
    );
}

export default Hero;