import React from 'react'

import pic1 from "../../assets/rndimg/werbepsychologie.png";

export default function Marketing() {
    return (
        <div className="marketing">
            <div className="herotitle">
                <p>McWerbepsychologie</p>
                <img src={pic1} alt="" srcset="" />
            </div>
            <div className="boxes">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
            </div>
        </div>
    )
}


/*

<div class="wrapper">
            <div class="two">Two</div>
            <div class="one">One</div>
            <div class="three">Three</div>
            <div class="four">Four</div>
            <div class="five">Five</div>
            <div class="six">Six</div>
        </div>
*/