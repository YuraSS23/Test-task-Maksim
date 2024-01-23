import React from 'react';
import {HeaderItem} from "./HeaderItem";
import {Button} from "../common/Button";
import "./Header.css"
import {Logo} from "./Logo";

export const Header = () => {
    return <header>
        <Logo />
        <HeaderItem upperText={"Прием заявок"} lowerText={"до 11"}/>
        <HeaderItem upperText={"Получение заданий"} lowerText={"4"}/>
        <HeaderItem upperText={"Внесение ответов"} lowerText={"до 18"}/>
        <HeaderItem upperText={"Итоги конкурса"} lowerText={"19"}/>
        <Button text={"Вход в кабинет"} classname={"entryBtn"}></Button>
    </header>
}