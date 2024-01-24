import React from 'react';
import {Button} from "../common/Button";
import {Profit} from "./Profit";
import "./Content.css"
import points from "../../assets/images/points.svg"

export const Content = () => {
    return <div>
        <img className={"points"} src={points}/>
        <h1>Тестовое задание для <span className={"yellow"}>самого лучшего</span> верстальщика</h1>
        <div className={"maincontent"}>
            <div className={"textAndCircles"}>
                <h3>Низкий оргвзнос</h3>
                <div>
                    <div className={"circlegroup"+" "+"circle1"}>30₽</div>
                    <div className={"circlegroup"+" "+"circle2"}></div>
                    <div className={"circlegroup"+" "+"circle3"}></div>
                </div>
            </div>
            <Button text={"Подать заявку на участие"} classname={"adaptiveApplyBtn"}/>
            <Profit bigSpanText={"Ученикам"} smallSpanTexts={["Конкурс по 16 предметам",
            "Доступные задания для всех учеников",
            "Бесплатные дипломы и сертификаты"]}/>
            <Button text={"Подать заявку на участие"} classname={"applyBtn"}/>
            <Profit bigSpanText={"Учителям"} smallSpanTexts={["Бесплатные свидетельства",
                "Бесплатные благодарности",
                "Простое участие"]}/>
        </div>
    </div>
}