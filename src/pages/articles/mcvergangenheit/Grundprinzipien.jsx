import React from 'react'
import pic1 from "../../../assets/articles/mcvergangenheit/3.png";
import pic2 from "../../../assets/articles/mcvergangenheit/4.png";

function Grundprinzipien() {
    return (
        <article className="article">
            <h1 className="title">Grundprinzipien und wo sie herkommen</h1>
            <p className="subtitle">Eine geschichtliche Einführung ins Universum von McDonald’s</p>
            <br />
            <img src={pic1} alt="" className="hero"/>
            <p>
            McDonalds hat heute feste Prinzipien, die in jedem 
            Restaurant umgesetzt werden müssen. Wie sonst wäre 
            es möglich das ich in der Schweiz, in Russland, in 
            Argentinien und in den vereinigten Staaten beinahe 
            das gleiche Erlebnis habe, wenn ich einen McDonald’s 
            betrete. Wo aber kommen diese Prinzipien her und wie 
            sind sie entstanden?
            </p>
            <br />

            <div className="text-picright">
            <p>
            In den 1930er Jahren wurde das Auto in den USA 
            immer populärer und somit auch die Kultur des Drive-in-Restaurants und 
            damit, Fast Food. Die Gebrüder Richard und Maurice McDonald’s eröffneten 
            ihr erstes eigenes, eher heruntergekommenes Restaurant in San Bernadino, 
            Kalifornien, im Jahre 1937, bis sie sich einige Jahre später ein etwas 
            Schöneres leisten konnten. Das Geschäft lief gut, der Krieg war vorbei 
            und mehr und mehr Leute konnten sich den Luxus leisten. Burger gehörten 
            aber in den ersten Jahren noch nicht zum Menü.
            </p>

            <img src={pic2} alt="" id="gp2"/>
            </div>
            <p>
            Die Konkurrenz wurde aber immer grösser und damit das Geschäft immer schwieriger, weswegen sich die Gebrüder ein neues System ausdenken mussten, um weiterhin als Restaurant zu existieren. Die Lösung war, kurzgesagt, das System des Autoherstellers Ford: Fliessbandproduktion. Es sollte alles standardisiert werden, einfach umzusetzen für ungelehrte Mitarbeiter und etwas für jeden sein. 
            Somit kam der Burger und damit das modulare Menü von Burger, Pommes und einem alkoholfreien Getränk, bei dem die Zutaten mit dem vorher erklärten System vor- und zubereitet werden. Fast-Food war erstmals wirklich schnell und trotzdem gut. Gleichzeitig erlaubte es den Brüdern den Ertrag um einiges zu erhöhen, was ihnen später die Expansion ermöglichte, die das Unternehmen zu dem machte, was es heute ist.
            Die Qualität sollte dabei aber nicht verloren gehen. Es sollten gute Zutaten sein (also pflegt man auch eine gute Beziehung zum Liefernden) und der Konsumierende sollte sich in einem hygienischen Umfeld befinden. Auch die Küche ist, bis heute, offen und für jeden Kunden zu sehen.
            Schliesslich entschieden sich die beiden auch eine neue Zielgruppe besser anzusprechen: Familien mit Kindern. Eine wichtige Entscheidung für die spätere Entwicklung. 
            Damit waren sie also festgelegt, die Prinzipien mit denen McDonald’s gross wurde und die bis heute überall den gleichen Big Mac ermöglichen, soweit das sogar ein Index daraus entstanden ist. 
            </p>
            <br />
            <strong id="aufzaehlung">
            <p>
            -	Massenproduktion, Standardisierung und Modularität <br />
            -	Hygiene <br />
            -	Qualität und trotzdem günstig <br />
            -	Die Zielgruppe der Familien mit Kindern <br />
            -	Enge Zusammenarbeit mit Lieferenden <br />
            </p>
            </strong>
            <br />
            <p>
            Die Massenproduktion ist leider auch der Grund, weswegen noch heute viele Mitarbeiter sich aufgrund inhumaner Verhältnisse beschweren. So eintönig und langweilig, dass die Arbeit schlussendlich unwürdig ist. Damit sind aber die wichtigsten Prinzipien zusammengefasst, die bis heute noch anhalten. 
            </p>
        </article>
    )
}

export default Grundprinzipien
