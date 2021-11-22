import React from 'react';
import { useHistory } from 'react-router';

const Footer = () => {
    let history = useHistory();
    return (
        <footer>
            <ul className="linksbottom">
                <li onClick={()=>{history.push("/MaturaArbeit/Abbildungsverzeichniss")}}>Quellen/Abbildungssverz. <br /><p color="grey">Alle Angaben der Website sind ohne Gewähr</p></li>
                <li onClick={()=>{history.push("/MaturaArbeit/Kommentare")}}>Wissenschaflticher Kommentar</li>
                <li onClick={()=>{history.push("/MaturaArbeit/Kontakt")}}>Kontakt</li>
            </ul>
        </footer>
    );
}

export default Footer;
