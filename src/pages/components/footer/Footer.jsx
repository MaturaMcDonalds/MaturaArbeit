import React from 'react';
import { useHistory } from 'react-router';

const Footer = () => {
    let history = useHistory();
    return (
        <footer>
            <ul className="linksbottom">
                <li onClick={()=>{history.push("/MaturaArbeit/Abbildungsverzeichniss")}}>
                    <p>
                    Quellen/Abbildungssverz. </p><br />
                    <p className="transparent">
                    Alle Angaben der Website sind ohne Gewähr
                    </p>
                </li>
                <li onClick={()=>{history.push("/MaturaArbeit/Kommentare")}}>
                    <p>
                    Wissenschaflticher Kommentar
                    </p>
                </li>
                <li onClick={()=>{history.push("/MaturaArbeit/Kontakt")}}>
                    <p>
                    Kontakt
                    </p>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
