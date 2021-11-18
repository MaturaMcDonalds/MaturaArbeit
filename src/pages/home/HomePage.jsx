import React from 'react'
import Info1 from "../../assets/home/Info1.png";
import Info2 from "../../assets/home/Info2.png";
import Info3 from "../../assets/home/Info3.png";
import CostumButton from "../components/button/Button";

//<img src="https://github.com/MaturaMcDonalds/MaturaArbeit/blob/master/src/assets/home/Pic2.jpg?raw=true" alt="" className="img" />
/*
<div className="inprogress" scroll="no">
                <p className="textInProgress">Work in progress</p>
            </div> 
*/
export default function HomePage() {
    return (
        <div className="homepage">
            <div className="inprogress" scroll="no">
                <p className="textInProgress">Work in progress</p>
            </div> 
            <div className="carusel">
                
            </div>
            <div className="infoBoxes">
                <div className="box">
                    <img src={Info1} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Wir sind für dich da!</p>
                        <p className="boxtext">
                            Hier findest du alle aktuellen Informationen zu den Services
                            und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                        </p>
                        <CostumButton text={"Mehr Erfahren"} className="boxbtn" />
                    </div>
                </div>
                <div className="box">
                    <img src={Info2} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Unsere Sicherheitsmassnahmen</p>
                        <p className="boxtext">
                            Die Gesundheit und Sicherheit aller Gäste und Mitarbeitenden wird bei uns gross geschrieben
                        </p>
                        <CostumButton text={"Mehr Informationen"} className="boxbtn" />
                    </div>
                </div>
                <div className="box">
                    <img src={Info3} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Wir sind für dich da!</p>
                        <p className="boxtext">
                            Hier findest du alle aktuellen Informationen zu den Services
                            und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                        </p>
                        <CostumButton text={"Mehr Erfahren"} className="boxbtn" />
                    </div>
                </div>
            </div>
        </div>
    )
}
