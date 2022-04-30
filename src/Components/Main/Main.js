import React from 'react';
import ozarkWebsite from '../../images/ozarksgarage-website.png';
import ogLogo from '../../images/ozarkgarage-logo.svg'
import ocTabsOne from '../../images/OCTabs1.jpg'
import ocTabsTwo from '../../images/OCTabs2.jpg'
import ocTabsThree from '../../images/OCTabs3.jpg'
import './Main.css'
export default function Main() {
    return (
        <>
            <section className="skills-container">
                <div class="row">
                    <div className="column">
                        <h3>Passionate</h3>
                        <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="column">
                    <h3>Diligent.</h3>
                        <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="column">
                    <h3>Lorem Ipsum</h3>
                        <p>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="ogDetail-container">
                    <div className="ogDetail__image-container">
                        <img className="og__Website-image" src={ozarkWebsite} alt="ozarks garage detail website"/>
                    </div>
                    <div className="og__logo-container">
                        <img className="og__Logo" src={ogLogo} alt="ozarks garage detail logo"/>
                    </div>
                    <div className="og__description-container">
                        <h3>Ozark's Garage Detail</h3>
                        <p>This website was designed using Wix. The previous design “worked”, but I didn’t just want something functional.
                         I needed to add a design that was easier for clients to read and get higher end clients.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="oneCountry-container">
                    <div className="oneCountry__description-container">
                        <h3>One Country</h3>
                        <p>This was a small design I did for One Country during my contractor/internship position. During this position I learned a 
                        lot especially the functionality of how to display data on them. It provided easier access for the clients to keep up to date on the most recent news.</p>
                    </div>
                    <div className="oneCountry__image-container">
                        <img className="oneCountry__Tabs" src={ocTabsOne} alt="ozarks garage detail logo"/>
                        <img className="oneCountry__Tabs" src={ocTabsTwo} alt="ozarks garage detail logo"/>
                        <img className="oneCountry__Tabs" src={ocTabsThree} alt="ozarks garage detail logo"/>
                    </div>
                </div>
            </section>
            
        </>
    )
}