import React from 'react'
import ogHero from '../../images/ogHero.png'
import ibLogo from '../../images/ib-logo.svg'
import {Link} from 'react-router-dom'
import './OGDetailHeader.css'
export default function OGDetailHeader(){
    return (
        <>
            <div className="top-container">
                <div className="back__btn-container">
                    <a href="/"><span> Back</span></a>
                </div>
                <div className="ogDetail__ib__logo-container">
                    <Link to="/"><img src={ibLogo} alt="ib logo" /></Link>
                </div>
                
            </div>
            <div className="ogDetail__hero-container">
                    <img src={ogHero} alt="ozarks garage detail hero"/>
            </div>
        </>
    )
}