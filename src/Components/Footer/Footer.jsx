import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {

    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span><a href="mailto:thakurpratham15@gmail.com">thakurpratham15@gmail.com</a></span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/prathamesh_thakur15/" target={'_blank'}><Insta color="white" size={"3rem"} /></a>
                    <a href="https://www.facebook.com/prathamesh.thakur.90" target={'_blank'}><Facebook color="white" size={"3rem"} /></a>
                    <a href="https://github.com/prathamesh-webdesigner" target={'_blank'}><Gitub color="white" size={"3rem"} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer