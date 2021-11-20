import React from 'react'

import box1 from "../../assets/homepage/box1.png";
import box2 from "../../assets/homepage/box2.png";
import box3 from "../../assets/homepage/box3.png";
import hero from "../../assets/mczukunft/werbepsychologie.png"
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
            <div className="carusel">
                <img src={hero} alt="" />
            </div>
            <div className="infoBoxes">
                <div className="box">
                    <img src={box1} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">Historische Grundprizipien</p>
                        <p className="boxtext">
                        Und wo sie herkommen
                        </p>
                        <CostumButton text={"Nachlesen"} className="boxbtn" />
                    </div>
                </div>
                <div className="box">
                    <img src={box2} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader" id="Klimawandel">Klimawandel</p>
                        <p className="boxtext" id="Klimawandel">
                        Was macht McDonald’s dagegen?
                        </p>
                        <CostumButton text={"Nachlesen"} className="boxbtn" />
                    </div>
                </div>
                <div className="box">
                    <img src={box3} alt="" srcset="" />
                    <div className="textbuttonheader">
                        <p className="boxheader">McWerbepsychologie</p>
                        <p className="boxtext">
                        Was steckt dahinter?
                        </p>
                        <CostumButton text={"Nachlesen"} className="boxbtn" />
                    </div>
                </div>
            </div>
        </div>
    )
}
