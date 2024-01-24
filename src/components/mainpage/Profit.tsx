import React from 'react';
import "./Profit.css"

type ProfitPropsType = {
    bigSpanText: string
    smallSpanTexts: string[]
}

export const Profit: React.FC<ProfitPropsType> = ({bigSpanText, smallSpanTexts}) => {
    return <div className={"profit"}>
        <p className={"bigText"}>{bigSpanText}</p>
        {smallSpanTexts.map(text => <p className={"smallText"}>{text}</p>)}
    </div>
}