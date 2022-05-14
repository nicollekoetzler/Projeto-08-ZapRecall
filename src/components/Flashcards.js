import Lista from "./Lista"
import Bottom from "./Bottom"

export default function Flashcards({ visibleFlashcards }){

const itemsBottom = [
    {
        concluded: "0/4 CONCLUÍDOS",
        result: "Parabéns!",
        imgbolinha: "assets/right.png",
        imgresult: "assets/party.png",
        description: "Você não esqueceu de nenhum flashcard!"
    }
]

    return(
        <div className={ `flashcards ${ visibleFlashcards }` }>
            <div className="header">
                <img className="imageHeader" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
            </div>
            <Lista />
            {itemsBottom.map((item, index) => <Bottom  key={index} concluded={item.concluded} result={item.result} description={item.description} imgbolinha={item.imgbolinha} imgresult={item.imgresult} />)}
        </div>
    )
}