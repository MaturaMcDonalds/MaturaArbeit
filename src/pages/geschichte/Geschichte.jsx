import React from 'react';
import CostumButton from "../components/button/Button";
import pic1 from "../../assets/img/grundprinzipien1.png";
import { useHistory } from "react-router-dom";

const Geschichte = () => {
    let history = useHistory();
    return (
        <div className="mcGeschichte">
            <h1>McVergangenheit</h1>
            <div className="top">
                <img src={pic1} alt="" ></img>
                <div className="textOverImg">
                    <h2>Grundprinzipien und wo sie herkommen</h2>
                    <p>Eine geschichtliche Einführungs in das Universum des riesigen Fast-Food Konzerns</p>
                    <CostumButton text={"Mehr Erfahren"} className="boxbtn" action={()=>{
                        history.push("/MaturaArbeit/Grundprinzipien")
                    }}/>
                </div>
            </div>
            <div className="articleBox">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="articleBox">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="articleBox">
                <div className="left"></div>
                <div className="right"></div>
            </div>
        </div>
    );
}

export default Geschichte;
