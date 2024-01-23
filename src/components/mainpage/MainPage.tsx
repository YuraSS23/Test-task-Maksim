import React from 'react';
import img from "../../assets/images/kisspng-graduation-ceremony-college-academic-degree-gradua-university-graduation-5ac8107bbd0874 1.svg"
import {Content} from "./Content";
import "./MainPage.css"

export const MainPage = () => {
    return <div className={"mainpage"}>
        <Content />
        <img src={img}/>
    </div>
};