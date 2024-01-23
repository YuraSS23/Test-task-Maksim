import React from 'react';
import logo from "../../assets/images/surface1.svg"
import "./Logo.css"

export const Logo = () => {
    return <div className={"logo"}>
        <img src={logo}/>
        <h3>Логотип</h3>
    </div>
}