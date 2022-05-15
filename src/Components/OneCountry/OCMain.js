import React, { useState } from 'react'
import ocSurprised from '../../images/oc-surprised.png'
import ocPorsche from '../../images/oc-porsche.png'
import ocCabin from '../../images/oc-cabin.png'
import './OCMain.css'

export default function OCMain(props) {
    const [activeTab, setActiveTab] = useState("winner");

    let checkImage = () => {
        if (activeTab === 'winner') {
            return ocSurprised;
        }
        else if (activeTab === 'newGiveaways') {
            return ocPorsche;
        }
        else {
            return ocCabin
        }
    }

    console.log(props.data);
    return (
        <>
            <section className="oc__about-container">
                <h3>About</h3>
                <p>One Country was a small growing business that not only sold boots but users can subscribe for giveaways. I held a Jr. Software position
                    with them from March to April as a contractor/intern. During this time I began to gain a lot more exposure to Javascript, React, MobX, Context,
                    one small Node.js project, HTML, CSS, and RESTful API's from Shopify. Although I was not there as much as I would've liked to be, I definitely
                    enjoyed working with them and getting exposure to everything they taught me. I thank them for the opportunity and their time.</p>
            </section>
            <section>
                <div className="container">
                    <h3>Interact With Me!</h3>
                    <p>This is a small demonstration of theme designed and functionality of the tabbed content
                        I created with OneCountry. They needed something to display the most recent winners, giveaways,
                        , and ending giveaways. Doing this resulted in higher interaction in the users account and easier
                        access to keep the users up to date.</p>
                    <nav>
                        <ul className="block__tabs">
                            <li className={activeTab === "winner" ? "active" : ""} onClick={() => setActiveTab("winner")}>Recent Winners</li>
                            <li className={activeTab === "newGiveaways" ? "active" : ""} onClick={() => setActiveTab("newGiveaways")}>New Giveaways</li>
                            <li className={activeTab === "endingGiveaways" ? "active" : ""} onClick={() => setActiveTab("endingGiveaways")}>Ending Giveaways</li>
                        </ul>
                    </nav>
                    <div className="content__info">
                        {props.data.filter((item) => item.category === activeTab).map((tabbedContent) => {
                            return (<div key={tabbedContent.id} className="content__info">
                                <img className="tabbedContent__image" src={checkImage()} alt="tabbed content img" />
                                <h3 className="tabbedContent__header" >  {tabbedContent.title}</h3>
                                <p className="tabbedContent__descript" >{tabbedContent.description}...</p>
                            </div>)
                        })}
                    </div>
                </div>
            </section>

        </>
    )

}