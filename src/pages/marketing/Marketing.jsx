import React from 'react'

import pic1 from "../../assets/img/grundprinzipien1.png";
import box1 from "../../assets/img/box1.png"
import box2 from "../../assets/img/box2.png"
import box3 from "../../assets/img/box3.png"

export default function Marketing() {
    return (
        <div className="marketing">
            <h1 className="title">McVergangenheit</h1>
            <div className="herowithbox">
                <img src={pic1} alt="" ></img>
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