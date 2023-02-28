import React from "react";
import logo from "../Assets/Mobirey-Logo_Footer.png"
import Facebook from "../Assets/facebook.png"
import Twitter from "../Assets/twitter.png"
import Linkedln from "../Assets/linkedln.png"
import Pintrest from "../Assets/pintrest.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-main">
                <div className="Footer_items">
                    <div className="Footer_links">
                        <div className="Footer_Logo">
                            <img src={logo} className="Flogo" alt="" />

                        </div>
                        <div className="Footer-list">
                            <p>At Mobirey, we are not only committed to providing novel solutions but also to make our clients sustain and be among the elite in their domain. </p>
                            
                        </div>
                    </div>
                    <div className="Footer_media1">
                       
                        <ul className="Footer-list1">
                            <li> <a href="/TeslaBoard"> HOME</a> </li>
                            <li> <a href="/product">PRODUCT </a></li>
                            <li> <a href="/contact">CONTACT US</a></li>
                          
                        </ul>
                    </div>
                    <div className="Footer_media">
                        <div className="Footer_header">
                            <h3>FOLLOW US</h3>
                        </div>
                        <ul className="Footer-list">
                            <li> <a href="#"> <img src={Facebook} alt="" /></a> </li>
                            <li> <a href="#"><img src={Twitter} alt="" /></a></li>
                            <li> <a href="#"><img src={Linkedln} alt="" /></a></li>
                            <li> <a href="#"><img src={Pintrest} alt="" /></a></li>
                        </ul>
                    </div>
                  
                </div>
                <span className="Footer_hr">
                    <hr />
                    <p> all rights reserved <span className="copy">&copy;</span> by Mobirey </p>
                </span>
            </div>
        </div>
    )
}


export default Footer