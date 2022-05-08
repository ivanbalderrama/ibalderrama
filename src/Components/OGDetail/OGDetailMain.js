import React from 'react'
import ogDetailTable from '../../images/ogDetailTable.png'
import xdOGDetail from '../../images/xd-ogDetail.png'
import './OGDetailMain.css'
export default function OGDetailMain(){
    return(
        <div className="ogDetail__main-container">
            <section className="ogDetail__about-container">
                <h3>About</h3>
                <p>Ozark's Garage Detail is a small business I own for not only extra money but as a hobby. Although the website was not created in code by me, I used this to focus on my design skills and refresh
                my memory as to what I learned in school. Being able to make the headers different colors resulting in
                catching the users attention. The charts were designed to give user prices up front for services while maintaining a 
                clean look so they can focus on what really matters to them.</p>
                 <img src={ogDetailTable} alt="Ozarks Garage Detail demonstration"/>
                 
            </section>
            <section className="ogDetail__plans-container">
            <h3>Plans</h3>
                <p>At the moment I do not have any plans for redesigning Ozark's Garage Detail, but I do intend to possibly add features
                so that the user can search up their vehicle and find out the price of the service they want.</p>
            </section>
            <section className="ogDetail__used-container">
                <h3>What I Used</h3>
                <p>I started designing the page using AdobeXD. Most of my high fidelity designs are done only there. Wix was used to create
                the website and although it was not coded by scratch this was mostly intended for experience in design. Other resources used
                include Pexels/Unsplash for images and Behance for inspiration on design.</p>
                  <img src={xdOGDetail} alt="Ozarks Garage Detail"/>
            </section>
        </div>
    )
}