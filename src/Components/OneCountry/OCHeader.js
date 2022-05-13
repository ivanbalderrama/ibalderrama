import React from 'react'
import ibLogo from '../../images/ib-logo.svg'
import OCHero from '../../images/oneCountry-hero.png'
import './OCHeader.css'
import {Link} from 'react-router-dom'
export default function OCHeader(){         
    return(
        <>
            <div className="oc__top-container">
                <div className="oc__back__btn-container">
                    <a href="/"><span> Back</span></a>
                </div>
                <div className="oc__ib__logo-container">
                    <Link to="/"><img src={ibLogo} alt="ib logo" /></Link>
                </div>
                
            </div>
            <div className="oc__hero-container">
                    <img src={OCHero} alt="one country background"/>
            </div>
        </>
    )
}