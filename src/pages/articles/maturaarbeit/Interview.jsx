import React from 'react'
import pic1 from "../../../assets/articles/maturaarbeit/1.png";
import pic2 from "../../../assets/articles/maturaarbeit/2.png";

export default function Interview() {
    return (
        <article className="article">
            <h1 className="title">Interviewpartner</h1>
            <br />
            <br />
            <br />
            <div className="interview">
            <div>
            <h2>Georges Roos</h2>
            <br />
            <p>
            Georges Roos ist Zukunftsforscher. Er studierte Philosophie an der Uni Zürich, unterrichtet und gründet sein eigenes Zukunftsinstitut ROOS Trends&Futures. Er unterstützt Führungskräfte, Investoren und Politiker dabei die Zukunft vorauszusagen. 
            Wir kamen erstmals auf seinen Namen, als wir uns mit dem Thema der Zukunftsforschung etwas näher auseinandersetzten. Schnell kommen Begriffe wie Megatrends, Extrapolierung und Szenarien zusammen und der Laie versucht sich etwas zusammenzudichten. Zukunftsforschung ist kontrovers und wird oft nicht ernstgenommen. „Die Zukunft kann nicht seriös vorausgesagt werden, wie kann dann so eine „Forschung“ überhaupt existieren?“
            Auch wir stellten uns diese Fragen. Wir wollten ja auch selbst Zukunftsforschung betreiben. Also sahen wir als beste Lösung ein Gespräch mit Georges Roos. Kurz nach der Anfrage kam auch die Antwort, mit McDonald’s könne er uns weniger helfen, aber er würde uns gerne mit den Fragen helfen, die wir zur Zukunftsforschung haben.
            So trafen wir uns, online, und führten ein sehr informatives Gespräch. So klärten sich unsere Fragen und wir wussten wie also in die Zukunft geforscht wird. (Zukunftsforschung)
            </p>
            </div>
            <img src={pic1} alt=""/>
            </div>
            
            <br />
            <br />

            <div className="interview">
            <img src={pic2} alt=""/>
            <div className="leftmargin">
            <h2>Werner Schaeppi</h2>
            <br />
            <p>
            Dr. Werner Schäppi ist Werbepsychologe im Bereich Kommunikationsforschung und -beratung. Er selbst ist Teil einer Creafactory, welche politische und unternehmerische Werbekampagnen entwickelt, die Kommunikation dieser Unternehmen untersucht und verbessert. Er unterrichtet auch als Dozent, unter anderem in der Uni Zürich. 
            Wir selbst mussten uns, im Rahmen unseres Werbevideos mit Werbepsychologie, Unternehmensidentität usw. beschäftigen. Auch hier geht man als Laie schnell verloren in einem Haufen von Theorien und unterschiedlichen Psychologieunterthemen. Wir entschieden uns also wieder, nachdem das erste Gespräch uns Erfolgreich weiterbrachte, ein zweites Gespräch zu führen mit eben, Werner Schäppi. Als Werbepsychologe, der sich speziell mit Kampagnen auseinandersetzt, könnte er uns gut weiterhelfen, vor allem auch als Erweiterung im Thema selbst.
            Wir trafen uns erneut auf Zoom und hörten für 45 Minuten grösstenteils zu. Nicht nur konnte Herr Schäppi uns mit einzelnen Theorien klarheit geben, sondern auch spezifisch auf McDonald’s bezogene Beispiele erklären. Ein wichtiger, weiterer Schritt zur Erstellung der Artikel und das Verständnis des riesigen Konstrukts, welches wir uns vornahmen zu beleuchten.
            </p>
            </div>
            </div>
        </article>
    )
}
//leftmargin