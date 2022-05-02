import React from 'react';
import ibLogo from '../../images/ib-logo.svg';
import heroImg from '../../images/hero-background.jpg'
import resumePdf from '../../Ivan-Balderrama-Resume.pdf'
import './Header.css';

export default function Header() {
    return (
        <div>
            <div className="nav__logo-container">
                <div className='logo-container'>
                    <img className='ib__logo-img' src={ibLogo} alt="logo homepage" />
                </div>
                <div className="navigation-container">
                    <nav className="navigation">
                        <ul>
                            <li>Home</li>
                            <li>Education</li>
                            <li>Work</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='hero-container'>
                <img className='hero-image' src={heroImg} alt="hero background"/>
                <div className='hero__description-container'>
                    <h1>Hello,<br></br> <span className='name'>Ivan</span> here.</h1>
                    <p>I am a recent graduate from Full Sail University and graduated with a Associates of Science in Web Design &
                     Development. I am passionate not only with design but with solving problems and love to be challenged. Click
                     below to download a pdf of my resume:
                    </p>
                    <div className="resume__button-container">
                    <a className="resume__button" target="_blank" rel="noreferrer" href={resumePdf}>Download</a>
                    </div>
                </div>
            </div>
        </div>
    )
}