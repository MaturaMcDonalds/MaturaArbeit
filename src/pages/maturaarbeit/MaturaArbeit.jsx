import React from 'react'

import interview from "../../assets/maturaarbeit/interview.png"

//<img src="https://github.com/MaturaMcDonalds/MaturaArbeit/blob/master/src/assets/home/Pic2.jpg?raw=true" alt="" className="img" />
/*
<div className="inprogress" scroll="no">
                <p className="textInProgress">Work in progress</p>
            </div> 
*/
export default function MaturaArbeit() {
    return (
        <div className="matura">
            <h1 className="maturaTitle">Unsere Maturaarbeit</h1>
            <div className="articleBox">
                <div className="left">
                    <h1>
                    Abstract
                    </h1>
                    <p className="boxtext">
                    Ein kurze Erklärung, was das Ganze überhaupt soll
                    </p>
                    <button><p>Nachlesen</p></button>
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
                    <button><p>Nachlesen</p></button>
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
                    Fazit und Ausblick 
                    </p>
                    <button><p>Nachlesen</p></button>
                </div>
            </div>
        </div>
    )
}
