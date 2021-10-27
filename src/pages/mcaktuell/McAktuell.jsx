import React from 'react'
import Img from "../../assets/img/placeholder.png";

function McAktuell() {
    return (
        <div className="mcAktuell">
            <section id="heroWithPictureRight" className="light">
                <div className="left">
                    <h1>
                        <span>McDonalds</span> Aktuell
                    </h1>
                    <p>
                    Lorem ipsum dolor sit <strong>amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut </strong>
                     labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                    et justo duo dolores et ea rebum. 
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                    dolor sit amet. Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy 
                    eirmod tempor invidunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. At vero eos et accusam 
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.                    
                    </p>
                </div>
                <div className="right">
                    <img src={Img} className="imgHero" alt="" srcset="" />
                </div>
            </section>
            <section id="sectionWithPictureBelow" className="dark">
            <div className="top">
                    <h1 id="imlovinit">
                        i'm <span>lovin'</span> it
                    </h1>
                    <p>
                    Lorem ipsum dolor sit <strong>amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut </strong>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <strong>sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</strong> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<strong> Stet clita kasd gubergren, no sea takimata sanctus est</strong> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at <strong>vero eros et accumsan et iusto odio dignissim </strong>qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,                
                    </p>
                </div>
                <div className="bottom">
                    <img src={Img} className="imgHero" alt="" srcset="" />
                </div>
            </section>
        </div>
    )
}

export default McAktuell
