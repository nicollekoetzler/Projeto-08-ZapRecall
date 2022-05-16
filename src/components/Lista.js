import React from "react";
import Questions from "./Questions";

export default function Lista({setIconBottom, iconBottom, itemsQuestions}){

    function shuffle(){
        return Math.random()-0.5;
    }

    const shuffledQuestions = itemsQuestions.sort(shuffle);

    return (
        <div className="lista">
            <ul>
                {shuffledQuestions.map((item, index) => <Questions key={index} setIconBottom={setIconBottom} iconBottom={iconBottom} question={item.question} shownquestion={item.shownquestion} answer={item.answer} />)}
            </ul>
        </div>
    )
}