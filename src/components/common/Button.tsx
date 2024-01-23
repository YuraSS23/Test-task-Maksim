import React from 'react';
import "./Button.css"

type ButtonPropsType = {
    text: string
    classname?: string
}

export const Button:React.FC<ButtonPropsType> = ({text, classname}) => {
    return <button className={"button"+" "+classname} >{text}</button>
};