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
                        <h1 className="tabbedContent__header" >  {tabbedContent.title}</h1>
                        <p className="tabbedContent__descript" >{tabbedContent.description}...</p>
                    </div>)
                })}
            </div>
        </div>

        
        </>
    )

}