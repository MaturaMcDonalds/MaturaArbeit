import React from 'react';
import { useHistory } from 'react-router';

const Footer = () => {
    let history = useHistory();
    return (
        <footer className="footer">
            <div onClick={()=>{history.push("/MaturaArbeit/Abbildungsverzeichniss")}}>
                <p>Quellen/Abbildungssverz.</p>
                <span className="grey">Alle Angaben der Website sind ohne Gewähr</span>
            </div>
            <div onClick={()=>{history.push("/MaturaArbeit/Kommentare")}}>
                <p>Wissenschaflticher Kommentar</p>
            </div>
            <div onClick={()=>{history.push("/MaturaArbeit/Kontakt")}}>
                <p>Kontakt</p>
            </div>
        </footer>
    );
}

export default Footer;
