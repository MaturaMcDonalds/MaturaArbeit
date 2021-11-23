import React from 'react'
import { useHistory } from 'react-router'

import interview from "../../assets/maturaarbeit/interview.png"

//<img src="https://github.com/MaturaMcDonalds/MaturaArbeit/blob/master/src/assets/home/Pic2.jpg?raw=true" alt="" className="img" />
/*
<div className="inprogress" scroll="no">
                <p className="textInProgress">Work in progress</p>
            </div> 
*/
export default function MaturaArbeit() {
    let history = useHistory();
    return (
        <div className="matura">
            <h1 className="maturaTitle">Unsere Maturaarbeit</h1>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Abstract
                    </h1>
                    <p className="boxtext">
                    Eine kurze Erklärung, was das Ganze überhaupt soll
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/Matura/Abstract")}}><p>Nachlesen</p></button>
                </div>
            </div>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Interviewpartner
                    </h1>
                    <p className="boxtext">
                    Interessante Persönlichkeiten
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/Matura/Interview")}}><p>Nachlesen</p></button>
                </div>
                <div className="right">
                <img src={interview} alt="" />
                </div>
            </div>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Abschliessende Worte
                    </h1>
                    <p className="boxtext">
                    Fazit, Reflexion und Ausblick 
                    </p>
                    <button onClick={()=>{history.push("/MaturaArbeit/Matura/Abschliessend")}}><p>Nachlesen</p></button>
                </div>
            </div>
        </div>
    )
}
