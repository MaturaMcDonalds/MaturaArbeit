import React from 'react'
import Info1 from "../../assets/Info1.png";
import Info2 from "../../assets/Info2.png";
import Info3 from "../../assets/Info3.png";
import CostumButton from "../button/Button";

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="infoBoxes">
                <div className="box">
                    <img src={Info1} alt="" srcset="" />
                    <h2>Wir sind für dich da!</h2>
                    <p>
                        Hier findest du alle aktuellen Informationen zu den Services
                        und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                    </p>
                    <CostumButton text={"Mehr Erfahren"} />
                </div>
                <div className="box">
                    <img src={Info2} alt="" srcset="" />
                    <h2>Unsere Sicherheitsmassnahmen</h2>
                    <p>
                        Die Gesundheit und Sicherheit aller Gäste und Mitarbeitenden wird bei uns gross geschrieben
                    </p>
                    <CostumButton text={"Mehr Informationen"} />
                </div>
                <div className="box">
                    <img src={Info3} alt="" srcset="" />
                    <h2>Wir sind für dich da!</h2>
                    <p>
                        Hier findest du alle aktuellen Informationen zu den Services
                        und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                    </p>
                    <CostumButton text={"Mehr Erfahren"} />
                </div>
            </div>
        </div>
    )
}


/*
 <div className="carusel"></div>
            <div className="infoBoxes">
                <div className="box">
                    <img src={Info1} alt="" srcset="" />
                    <h2>Wir sind für dich da!</h2>
                    <p>
                        Hier findest du alle aktuellen Informationen zu den Services
                        und Öffnungszeiten der McDonald's Restaurants in deiner Region.
                    </p>
                    <CostumButton text={"Mehr Erfahren"} />
                </div>
                <div className="box">
                    <img src={Info2} alt="" srcset="" />
                    <h2>Unsere Sicherheitsmassnahmen</h2>
                    <p>
                        Die Gesundheit und Sicherheit aller Gäste und Mitarbeitenden wird bei uns gross geschrieben
                    </p>
                </div>

                </div>
*/