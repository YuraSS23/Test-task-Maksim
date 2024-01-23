import React from 'react';
import {Button} from "../common/Button";
import {Profit} from "./Profit";
import "./Content.css"
import circle1 from "../../assets/images/Ellipse 30.svg"
import circle2 from "../../assets/images/Ellipse 29.svg"
import circle3 from "../../assets/images/Ellipse 28.svg"

export const Content = () => {
    return <div>
            <h1>Тестовое задание для самого лучшего верстальщика</h1>
        <div className={"maincontent"}>
            <div className={"textAndCircles"}>
                Низкий оргвзнос
                <div className={"images"}>
                    <img src={circle1}/>
                    <img src={circle2}/>
                    <img src={circle3}/>
                </div>
                <Button text={"Подать заявку на участие"} classname={"applyBtn"}/>
            </div>
            <div className={"profits"}>
                <Profit bigSpanText={"Ученикам"} smallSpanTexts={["Конкурс по 16 предметам",
                    "Доступные задания для всех учеников",
                    "Бесплатные дипломы и сертификаты"]} />
                <Profit bigSpanText={"Учителям"} smallSpanTexts={["Бесплатные свидетельства",
                    "Бесплатные благодарности",
                    "Простое участие"]} />
            </div>
        </div>
        </div>
}