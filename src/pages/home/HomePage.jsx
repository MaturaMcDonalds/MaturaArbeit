import React from 'react'
import { useHistory } from "react-router-dom";

import box1 from "../../assets/homepage/box1.png";
import box2 from "../../assets/homepage/box2.png";
import box3 from "../../assets/homepage/box3.png";
import hero from "../../assets/mczukunft/werbepsychologie.png"


export default function HomePage() {
    let history = useHistory();
    return (
        <div className="homepage">
           <div className="top">
                <img src={hero} alt="" ></img>
                <div className="textOverImg">
                    <p className="heroTextTitle">Einsicht in unser Werbevideo der Zukunft</p>
                    <p className="heroText">Ein Artikel zu unserem Werbevideo, welches wir im Sinne von McDonald's in 10 Jahren gedreht haben</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/Werbevideo")}}><p>Nachlesen</p></button>
                </div>
            </div>
            <div className="infoBoxes">
                <div className="box">
                    <img src={box1} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Historische Grundprinzipien</p>
                        <p className="boxtext">
                        Und wo sie herkommen
                        </p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McVergangenheit/Grundprinzipien")}}><p>Nachlesen</p></button>
                    </div>
                </div>
                <div className="box">
                    <img src={box2} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader" id="Klimawandel">Klimawandel</p>
                        <p className="boxtext" id="Klimawandel">
                        Was macht McDonald’s dagegen?
                        </p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/KlimawandelAbfall")}}><p>Nachlesen</p></button>
                    </div>
                </div>
                <div className="box">
                    <img src={box3} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">McWerbepsychologie</p>
                        <p className="boxtext">
                        Was steckt dahinter?
                        </p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/Werbepsychologie")}}><p className="nachlesen">Nachlesen</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
