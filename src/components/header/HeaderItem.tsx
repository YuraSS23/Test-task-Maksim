import React from 'react';

type HeaderItemPropsType = {
    upperText: string
    lowerText: string
}

export const HeaderItem: React.FC<HeaderItemPropsType> = ({upperText, lowerText}) => {
    return <div>
        <p>{upperText}</p>
        <p className={"dim"}>{lowerText.slice(0,2)==="до"
            ?<span className={"dim"}>до <span className={"number"}>{lowerText.slice(2,lowerText.length)}</span></span>
            :<span className={"number"}>{lowerText.slice(0,lowerText.length)}</span>} марта
        </p>
    </div>
}