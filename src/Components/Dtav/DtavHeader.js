import React from 'react'
import ibLogo from '../../images/ib-logo.svg'
import dtavHero from '../../images/dtav-hero-background.png'
import {Link} from 'react-router-dom'
import './DtavHeader.css'
export default function DtavHeader() {
    return (
        <>
            <div className="top-container">
                <div className="back__btn-container">
                    <a href="/"><span> Back</span></a>
                </div>
                <div className="dtav__ib__logo-container">
                    <Link to="/"><img src={ibLogo} alt="ib logo" /></Link>
                </div>
                
            </div>
            <div className="dtav__hero-container">
                    <img src={dtavHero} alt="dtav hero background"/>
            </div>
        </>
    )
}