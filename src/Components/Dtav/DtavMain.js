import React from 'react'
import dtavCodeImg from '../../images/dtav-code.png'
import dtavSample from '../../images/dtav-sample.png'
import './DtavMain.css'

export default function DtavMain(){
    return(
        <div className="dtav__main-container">
            <section className="dtav__about-container">
                <h3>About</h3>
                <p>DTAV was created using React. The user can input a VIN number and get information about their vehicle. 
                 This information includes year, make, model, engine, mpg, hp, torque, and body type. Hoping to give a little more 
                 basic information about the vehicle to the user if there is an intended DIY project they’d like to complete from home.</p>
                 <img src={dtavSample} alt="dtav demonstration"/>
                 
            </section>
            <section className="dtav__plans-container">
            <h3>Plans</h3>
                <p>My plans are to be able to get the user to get more information about their vehicle without having to visit/call a 
                dealership or auto parts to obtain this information. I plan on changing the API source as Auto.dev doesn’t provide additional
                 about the vehicle and within time hope to continue to add on more to this project to solve more DIY projects.</p>
            </section>
            <section className="dtav__used-container">
                <h3>What I Used</h3>
                <p>During my contract/internship at One Country I managed to learn more using React. So I wanted to implement some of
                 what I learned into creating something that can not only be useful for me, but to other DIY users. I used axios to fetch
                  data from a REST API on Auto.dev and returned the data to the user once the VIN is decoded. Usestate hook is also used to quickly update the history of VIN numbers that were decoded as well as the VIN number being typed.</p>
                  <img src={dtavCodeImg} alt="dtav code sample"/>
            </section>
        </div>
    )
}