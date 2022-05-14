import Lista from "./Lista"
import Bottom from "./Bottom"

export default function Flashcards({ visibleFlashcards }){
    return(
        <div className={ `flashcards ${ visibleFlashcards }` }>
            <div className="header">
                <img className="imageHeader" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
            </div>
            <Lista />
            <Bottom />
        </div>
    )
}