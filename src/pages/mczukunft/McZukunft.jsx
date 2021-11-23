import React from 'react'
import { useHistory } from "react-router-dom";

import pic1 from "../../assets/mczukunft/werbepsychologie.png";
import pic2 from "../../assets/mczukunft/werbepsychologie1.png";
import box1 from "../../assets/mczukunft/box1.png"
import box2 from "../../assets/mczukunft/box2.png"
import box3 from "../../assets/mczukunft/box3.png"
import box4 from "../../assets/mczukunft/box4.png"

export default function McZunkuft() {
    let history = useHistory();
    return (
        <div className="mcMarketing">
            <h1 className="mczukunfTitle">McZukunft</h1>
            <div className="emptyBoxMcZ">
                <p className="heroTextTitleMcZE">Wie forscht man in die Zukunft?</p>
                <p className="heroTextMcZE">Eine Erklärung, wie wir auf die Ergebnisse der anderen Artikel von McZukunft gekommen sind </p>
                <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/Forschung")}}><p>Nachlesen</p></button>
            </div>

            <div className="topMcz">
                <img src={pic1} alt="" ></img>
                <div className="textOverImgMcz">
                    <p className="heroTextTitleMcZ">Einsicht in unser Werbevideo der Zukunft</p>
                    <p className="heroTextMcZ">Ein Artikel zu unserem Werbevideo, welches wir im Sinne von McDonald's in 10 Jahren gedreht haben</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/Werbevideo")}}><p>Nachlesen</p></button>
                </div>
            </div>
            <div className="topMcz">
            <img src={pic2} alt="" id="pic2"></img>
                <div className="textOverImgMcz">
                    <p className="heroTextTitleMcZ">Was macht das Klima mit McDonald’s?</p>
                    <p className="heroTextMcZ">Szenarien, wie die Zukunft des McMarketing in Anbetracht auf das Klima werden könnte</p>
                    <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/KlimaVeraenderung")}}><p>Nachlesen</p></button>
                </div>
            </div>
            
            <div className="bottomMcZ">
                <div className="topboxesMcZ">
                    <div className="boxMcz box1">
                        <p className="smallboxtitle">Vegetarisierung</p>
                        <img src={box1} alt="" id="pic2"></img>
                        <p className="smallboxtext">Zwei Szenarien, wie McDonald’s auch in Zukunft auf die immer grösser werdende, nicht Fleisch konsumierende Bevölkerung reagieren könnte</p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/KeinFleischMehr")}}><p>Nachlesen</p></button>
                    </div>
                    <div className="boxMcz box2">
                        <p className="smallboxtitle">Digitalisierung</p>
                        <img src={box2} alt="" id="pic2"></img>
                        <p className="smallboxtext">Zwei Szenarien, wie sich die immer mehr digitalisierende Welt auf McDonald’s auswirken könnte</p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/Digitalisierung")}}><p>Nachlesen</p></button>
                    </div>
                </div>
                <div className="bottomboxesMcz">
                    <div className="boxMcz box3">
                        <p className="smallboxtitle">Individualisierung</p>
                        <img src={box3} alt="" id="pic2"></img>
                        <p className="smallboxtext">Zwei Szenarien, wie McDonald’s auf den Trend der Individualiserung reagieren könnte</p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/Individualisierung")}}><p>Nachlesen</p></button>
                    </div>
                    <div className="boxMcz box4">
                        <p className="smallboxtitle">Gesundheitsexpansion</p>
                        <img src={box4} alt="" id="pic2"></img>
                        <p className="smallboxtext">Zwei Szenarien, wie McDonalds mit der ständigen Gesundheitsexpansion umgehen könnte</p>
                        <button onClick={()=>{history.push("/MaturaArbeit/McZukunft/Gesundheitsexpansion")}}><p>Nachlesen</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
