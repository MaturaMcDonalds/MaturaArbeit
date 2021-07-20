import React from 'react'
import Info1 from "../../assets/Info1.png";
import Info2 from "../../assets/Info2.png";
import Info3 from "../../assets/Info3.png";
import CostumButton from "../components/button/Button";

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="carusel"></div>
            <div className="infoBoxes">
                <div className="box">
                    <img src={Info1} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Wir sind für dich da!</p>
                        <p>
                            Hier findest du alle aktuellen Informationen zu den Services
                            und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                        </p>
                        <CostumButton text={"Mehr Erfahren"} />
                    </div>
                </div>
                <div className="box">
                    <img src={Info2} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Unsere Sicherheitsmassnahmen</p>
                        <p>
                            Die Gesundheit und Sicherheit aller Gäste und Mitarbeitenden wird bei uns gross geschrieben
                        </p>
                        <CostumButton text={"Mehr Informationen"} />
                    </div>
                </div>
                <div className="box">
                    <img src={Info3} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Wir sind für dich da!</p>
                        <p>
                            Hier findest du alle aktuellen Informationen zu den Services
                            und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                        </p>
                        <CostumButton text={"Mehr Erfahren"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
