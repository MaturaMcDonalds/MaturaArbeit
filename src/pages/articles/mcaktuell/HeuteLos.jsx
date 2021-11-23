import React from 'react'
import pic1 from "../../../assets/articles/mcaktuell/1.png";
import pic2 from "../../../assets/articles/mcaktuell/3.png";

export default function HeuteLos() {
    return (
        <article className="article">
            <h1 className="title">Wie ist den Heute los?</h1>
            <p className="subtitle">
            Eine kleine Auswahl an den Marketingrinzipien von heute          
            </p>
            <br />
            <img src={pic1} alt="" className="hero"/>
            <br />
            <br />
            <p>In diesem Artikel sprechen wir von den Prinzipien des Marketings, die aus der Geschichte entstanden sind, aber bis heute eine wichtige Rolle spielen und weiterhin zum Geschäft gehören. In dem Artikel, Grundprinzipien und wie sie entstanden sprechen wir bereits von einigen dieser Prinzipien. Hier wollen wir sie aber konkreter erklären, sodass dann verständlich ist, weswegen diese auch noch heute funktionieren. Wie sonst wäre McDonald’s so erfolgreich?
            Systemgastronomie ist kurzgesagt das Prinzip der Vereinheitlichung aller Restaurants. Sie sollen im Vergleich zur normalen Gastronomie immer ein gleiches oder sehr ähnliches Erlebnis für die Kund:innen bieten. Die Vorgänge wie Zubereitung oder Darbietung, sowie Zutaten sind standardisiert und sollten überall ungefähr gleich sein. Dieses System ermöglichte McDonald’s ein Teil ihres Wachstums und sorgt dafür, dass der Big Mac überall gleich schmeckt.
            Fliessbandproduktion heisst mehr als nur, dass die Burger am Fliessband produziert werden.  Die Arbeit im McDonald’s soll kinderleicht sein, dass schlussendlich jeder problemlos den Burger zusammenbauen kann, die Pommes frittieren oder die Kasse bedienen kann. Alles soll einfach sein, um es schnell in Massen, eben wie am Fliessband, produzieren zu können.
            </p>
            <br />
            <p>Kinder und Familien sind eine der wichtigsten Zielgruppen von McDonald’s, weswegen wir einen ganzen Artikel darüber verfasst haben, um das Ganze zu belichten. 
            </p>
            <br />
            <br />
            <p>Ein grosser Haufen an Marketingstrategien, die wir in unserem Kommentar im 5. Kapitel behandeln. Diese sind sehr theoretisch und werden deswegen auch nicht immer genau so umgesetzt, wie die Theorie es vorgibt.
            </p>
            <br />
            <p>
            Ein Marketingprinzip, was vielleicht noch erstaunlich wirkt, ist dass die der Franchisegeber, also McDonald’s als solches sich einen nicht allzu kleinen Teil ihres Gewinnes nicht durch Essen oder Lizenzen verdient, sondern durch Immobilien. Nicht die Franchisenehmer:innen, sondern McDonald’s selbst kauft sich die Grundstücke, auf denen danach die Restaurants gebaut werden. Somit gehört McDonald’s, Die Firma, welche Burger und Pommes verkauften zu den weltgrössten Immobilienkonzernen.  
            </p>
            <br />
            <div className="text-picright">
            <p>
            Das letzte und wahrscheinlich eindrücklichste der Prinzipien ist die Glokalisierung. McDonald’s sollte ja eigentlich immer gleich sein. Um ihr Image zu behalten und überall den gleichen Erfolg zu haben. Trotzdem gibt es immer wieder Dinge, welche nicht in dieses System passen, es aber gleichzeitig doch tun. Nicht jedes Land hat den McRaclette, aber viele Länder haben ihre eigenen Kreationen, die an ihre Kulturen angepasst sind. Glokalisierung bedeutet eigentlich, «think global, act local». Denk global, agiere lokal. Wegen diesem Prinzip gibt es in Schweden das Ski-through, in Rom einen mit Marmorboden versetzen McDonald’s und eben, in der Schweiz den McRaclette.
            </p>
            <img src={pic2} alt=""/>
            </div>
            
        </article>
    )
}
