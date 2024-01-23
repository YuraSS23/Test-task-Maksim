import React from 'react';

type ProfitPropsType = {
    bigSpanText: string
    smallSpanTexts: string[]
}

export const Profit: React.FC<ProfitPropsType> = ({bigSpanText, smallSpanTexts}) => {
    return <div>
        <span>{bigSpanText}</span>
        {smallSpanTexts.map(text => <span>{text}</span>)}
    </div>
}