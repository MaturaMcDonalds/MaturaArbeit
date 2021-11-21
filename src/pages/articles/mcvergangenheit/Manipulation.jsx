import React from 'react'
import pic1 from "../../../assets/articles/mcvergangenheit/1.png";
import pic2 from "../../../assets/articles/mcvergangenheit/2.png";


function Manipulation() {
    return (
        <article className="article">
            <h1 className="title">Manipuliert McDonald’s unsere Kinder</h1>
            <p className="subtitle">
Die Kontroversen welche die junge Zielgruppe mit sich bringt
</p>
            <br />
            <img src={pic1} alt="Abbildung, (McDonalds Past, o.D.)" id="mp1"/>
            <p>
            
Eine der wichtigsten Zielgruppen von McDonald’s sind Kinder und junge Teenager, wie in unserem Artikel zur Zielgruppe ebenfalls erwähnt. Es geht in diesem Artikel auch nicht konkret um die Zielgruppe und die Psychologie dahinter, sondern um die Kontroversen, die damit kamen. 
Kinder sind einfacher «anzulocken» als Erwachsene. Sie reflektieren weniger und lassen sich von interessant aussehenden Werbungen, blinkendem Spielzeug und anderen Produkten schneller Mal verführen als Erwachsene. Dies ist bis heute so, und McDonald’s macht sich mit der Gestaltung seiner Filialen und Werbungen zunutze. (Gupta, 2014)

            </p>
            <br />

            <div className="text-picright">
            <p>
            Die Kontroversen, um welche es in diesem Artikel geht sind nicht bezogen auf Heute, sondern auf die Vergangenheit. In den 90ern war der Konsum, vor allem für Kinder, von Fernsehen nicht nur in den USA äusserst beliebt, sondern auch im europäischen Raum befanden sich die Kinder lange allein vor dem Fernseher. Zu dieser Zeit war der Clown Ronald McDonald noch Maskottchen und Werbungen mit diesem, wirkten teilweise auf Erwachsene fast verstörend, weil der Clown mit Kindern durch dieses von McDonald’s kreierte Paradies lief und die Gedanken der Kinder zu beeinflussen (Schneider, 2015).
            </p>

            <img src={pic2} alt="" id="gp2"/>
            </div>
            <p>
            Zu dieser Zeit waren Fernsehwerbung, auch in Bezug auf Kinder noch in den Anfängen. Zwar war es von Land zu Land unterschiedlich und hier in der Schweiz bei weitem nicht so dramatisch wie in den USA, trotzdem musste McDonald’s sich immer wieder Kritik stellen und ihre Werbekampagnen anpassen, weil sich Aufsichtsbehörden und Gesetze änderten.
Als der Clown als solches sich immer mehr in eine Horrorfigur verwandelte, spätestens seit dem Debut von ES, (ein Horrorfilm eines Mörderclowns dessen Opfer kleine Kinder sind) ist der Clown als Maskottchen gestorben, ersetzt von der neuen Figur «dem Happy Meal»
</p>
            <br />
        </article>
    )
}

export default Manipulation
