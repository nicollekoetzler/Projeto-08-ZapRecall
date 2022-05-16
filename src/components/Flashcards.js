import React from "react";
import Lista from "./Lista"
import Bottom from "./Bottom"

export default function Flashcards({ visibleFlashcards }){

    const [ iconBottom, setIconBottom ] = React.useState([]);
    //const [ concluded, setConstConcluded ] = x

    const itemsBottom = {
            concluded: `${iconBottom.length}/8 CONCLUÍDOS`,
            result: "Parabéns!",
            iconBottom: iconBottom,
            imgresult: "assets/party.png",
            description: "Você não esqueceu de nenhum flashcard!"
    }

    return(
        <div className={ `flashcards ${ visibleFlashcards }` }>
            <div className="header">
                <img className="imageHeader" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
            </div>
            <Lista setIconBottom={setIconBottom} iconBottom={iconBottom}/>
            <Bottom concluded={itemsBottom.concluded} result={itemsBottom.result} description={itemsBottom.description} iconBottom={itemsBottom.iconBottom} imgresult={itemsBottom.imgresult} />
        </div>
    )
}