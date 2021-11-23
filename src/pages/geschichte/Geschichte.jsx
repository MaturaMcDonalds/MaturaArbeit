import React from 'react';
import { useHistory } from "react-router-dom";

import pic1 from "../../assets/img/grundprinzipien1.png";
import box1 from "../../assets/img/box1.png"
import box2 from "../../assets/img/box2.png"
import box3 from "../../assets/img/box3.png"

const Geschichte = () => {
    let history = useHistory();
    return (
        <div className="mcGeschichte">
            <h1 className="mcGeschichteTitle">McVergangenheit</h1>
            <div className="topGS">
                <img src={pic1} alt="" ></img>
                <div className="textOverImg">
                    <p className="heroTextTitle">Grundprinzipien und wo sie herkommen</p>
                    <p className="heroText">Eine geschichtliche Einführung in das Universum des riesigen Fast-Food-Konzerns</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McVergangenheit/Grundprinzipien")}}><p>Nachlesen</p></button>
                </div>
            </div>
            <div className="articleBoxGs">
                <div className="leftGs">
                    <h1>
                    Die McDonaldisierung der Welt
                    </h1>
                    <p className="boxtextgs">Der American Way of Life jetzt endlich national und international überall verfügbar!</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McVergangenheit/McDonaldisierung")}}><p>Nachlesen</p></button>
                </div>
                <div className="rightGs">
                    <img src={box1} alt="" />
                </div>
            </div>
            <div className="articleBoxGs">
                <div className="leftGs">
                    <h1>
                    Manipulierte McDonald’s Kinder?
                    </h1>
                    <p className="boxtextgs">Das Problem, welches eine junge Zielgruppe mit sich bringt</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McVergangenheit/Manipulation")}}><p>Nachlesen</p></button>
                </div>
                <div className="rightGs">
                <img src={box2} alt="" />
                </div>
            </div>
            <div className="articleBoxGs">
                <div className="leftGs">
                    <h1>
                    Super-Size-Me und dessen Auswirkungen
                    </h1>
                    <p className="boxtextgs">
                    Wie ein Amateurfilm zu einem transparenteren und gesünderen McDonald’s verhalf
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McVergangenheit/SuperSize")}}><p>Nachlesen</p></button>
                </div>
                <div className="rightGs">
                <img src={box3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Geschichte;
