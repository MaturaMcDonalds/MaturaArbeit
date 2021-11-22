import React from 'react';
import { useHistory } from "react-router-dom";

import hero from "../../assets/mcaktuell/hero.png";
import box2 from "../../assets/mcaktuell/box2.png";
import box3 from "../../assets/mcaktuell/box3.png";
import box4 from "../../assets/mcaktuell/box4.png";
import box1 from "../../assets/mcaktuell/box1new.png";


function McAktuell() {
    let history = useHistory();
    return (
        <div className="mcAktuell">
            <h1 className="mcAktuellTitle">McAktuell & Werbepsychologie</h1>
            <div className="top">
                <img src={hero} alt="" ></img>
                <div className="textOverImg">
                    <p className="heroTextTitle">Klimawandel und Verpackungen</p>
                    <p className="heroText">Was McDonald’s gegen die Herausforderung tut, vor der die Menschheit steht</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/KlimawandelAbfall")}}><p>Mehr erfahren</p></button>
                </div>
            </div>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Werbepsychologie
                    </h1>
                    <p className="boxtext">
                    Eine Erläuterung was dahinter steckt anhand von Modellen, Theorien und Fallbeispielen
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/Werbepsychologie")}}><p>Nachlesen</p></button>
                </div>
                <div className="right">
                    <img src={box1} alt="" />
                </div>
            </div>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Was macht McDonalds für die, die kein Fleisch wollen?
                    </h1>
                    <p className="boxtext">
                    Was gibt’s überhaupt ausser Pommes?
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/VegetarischesEssen")}}><p>Nachlesen</p></button>
                </div>
                <div className="right">
                <img src={box2} alt="" />
                </div>
            </div>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Was passierte während unserer Arbeit?
                    </h1>
                    <p className="boxtext">
                    Eine Auswahl an Ereignissen, die das McMarketing der letzten Monate prägten
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/UnsereAbreit")}}><p>Nachlesen</p></button>
                </div>
                <div className="right">
                <img src={box3} alt="" />
                </div>
            </div>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Was ist den Heute los?
                    </h1>
                    <p className="boxtext">
                    Ein Einblick in die Marketingprinzipien von Heute
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McAktuell/HeuteLos")}}><p>Nachlesen</p></button>
                </div>
                <div className="right">
                <img src={box4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default McAktuell
