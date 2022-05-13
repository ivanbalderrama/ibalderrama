import React from 'react';
import ozarkWebsite from '../../images/ozarksgarage-website.png';
import ogLogo from '../../images/ozarkgarage-logo.svg'
import ocTabsOne from '../../images/OCTabs1.jpg'
import ocTabsTwo from '../../images/OCTabs2.jpg'
import ocTabsThree from '../../images/OCTabs3.jpg'
import tuTablet from '../../images/tu-tablet.png'
import tuLogo from '../../images/handshake.png'
import dtavLogo from '../../images/DTAV.png'
import dtavWebsite from '../../images/dtav-website.png'
import {Link} from 'react-router-dom'
import './Main.css'
export default function Main() {
    const linkStyle = {
        padding: "8px 30px",
        border: "none",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "#718355",
        fontFamily: 'Gilroy',
        letterSpacing: ".20px",
        textDecoration: "none",
        fontSize: "12px",
        marginTop: "1rem"
    }
    return (
        <>
            <section className="skills-container">
                <div className="row">
                    <div className="column">
                        <h3>Passionate</h3>
                        <p>
                            I am passionate about my work and am willing to learn anything I can to be better in my future. Knowledge will always be my
                            biggest personal investment and will continue to not only teach myself but to take everything I can with me from any project.
                        </p>
                    </div>
                    <div className="column">
                        <h3>Diligent</h3>
                        <p>
                            I'm self conscience about putting out the best work I can possible. I understand hard work, determination, and willingness
                            to learn can earn great success. The best way to show that is to respect your time and your investment in me.
                        </p>
                    </div>
                    <div className="column">
                        <h3>Time-Management</h3>
                        <p>
                            Although stress can be counter productive, school has taught me to keep myself organized and clear minded when it comes to time.
                            I plan my day to assure I keep my mind focused on whatever task I take on throughout the day to provide the best results.
                        </p>
                    </div>
                </div>

            </section>
            <section>
                <div className="dtav-container">
                    <div className="dtav__logo-container">
                        <img className="dtav__Logo" src={dtavLogo} alt="ozarks garage detail logo" />
                    </div>
                        <div className="dtav__image-container">
                            <img className="dtav__Website-image" src={dtavWebsite} alt="ozarks garage detail website" />
                        </div>
                        <div className="dtav__description-container">
                            <h3>DTAV</h3>
                            <p>DTAV was created for the user to be able to input a vin number and display
                                their vehicle's information. The data is fetches data from an API from Auto.dev
                                and displays information such as year, make, model, and some other mechanical specs.
                            </p>
                            <Link style={linkStyle} to="/dtav">Read More</Link>
                        </div>
                    </div>
            </section>
            <section>
                <div className="ogDetail-container">
                    <div className="og__logo-container">
                        <img className="og__Logo" src={ogLogo} alt="ozarks garage detail logo" />
                    </div>
                    <div className="ogDetail__image-container">
                        <img className="og__Website-image" src={ozarkWebsite} alt="ozarks garage detail website" />
                    </div>

                    <div className="og__description-container">
                        <h3>Ozark's Garage Detail</h3>
                        <p>This website was designed using Wix. The previous design “worked”, but I didn’t just want something functional.
                            I needed to add a design that was easier for clients to read and get higher end clients.</p>
                        <Link style={linkStyle} to="/ogdetail">Read More</Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="oneCountry-container">
                    <div className="oneCountry__description-container">
                        <h3>One Country</h3>
                        <p>This was a small design I did for One Country during my contractor/internship position. During this position I learned a
                            lot especially the functionality of how to display data on them. It provided easier access for the clients to keep up to date on the most recent news.</p>
                        <Link style={linkStyle} to="/oneCountry">Read More</Link>
                    </div>
                    <div className="oneCountry__image-container">
                        <img className="oneCountry__Tabs1" src={ocTabsOne} alt="ozarks garage detail logo" />
                        <img className="oneCountry__Tabs2" src={ocTabsTwo} alt="ozarks garage detail logo" />
                        <img className="oneCountry__Tabs3" src={ocTabsThree} alt="ozarks garage detail logo" />
                    </div>
                </div>
            </section>
            <section>
                <div className="twadeUp-container">
                    <div className="twadeUp__logo-container">
                        <img src={tuLogo} alt="Twade Up Logo" />
                    </div>
                    <div className="tablet__phone-container">
                        <div className="twadeUp__tablet__image-container">
                            <img src={tuTablet} alt="Twade Up Tablet" />
                        </div>
                    </div>
                    <div className="twadeUp__description-container">
                        <h3>Twade Up</h3>
                        <p>During school we learned that the user interface should be something readable and easy
                            for the user to navigate through pages just as someone would know whether to push or pull a door.
                            A user shouldn’t have to double think on how to get somewhere and this project was designed
                            around that.</p>

                        <p>More info coming soon...</p>
                    </div>
                </div>
            </section>

        </>
    )
}