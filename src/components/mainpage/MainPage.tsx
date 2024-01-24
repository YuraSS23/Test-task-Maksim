import React from 'react';
import img from "../../assets/images/kisspng-graduation-ceremony-college-academic-degree-gradua-university-graduation-5ac8107bbd0874 1.svg"
import {Content} from "./Content";
import "./MainPage.css"
import photofont from "../../assets/images/Photofont.svg"
import petals from "../../assets/images/petals.svg"


export const MainPage = () => {
    return <div className={"mainpage"}>
        <Content />
        <img className={"mainimg"} src={img}/>
        <div className={"rectangle"} />
        <img className={"photofont"} src={photofont}/>
        <div className={"cross"} >
            <div className={"halfCross"}></div>
            <div className={"halfCross2"}></div>
        </div>
        <img className={"petalsTop"} src={petals}/>
        <img className={"petalsBot"} src={petals}/>
    </div>
};