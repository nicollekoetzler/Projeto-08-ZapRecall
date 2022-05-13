import ReactDOM from "react-dom";
import React from "react";

function App(){
    const [ visibleWelcome, setVisibleWelcome ] = React.useState("");
    const [ visibleFlashcards, setVisibleFlashcards ] = React.useState("hidden");

    function redirectWelcomeFlashcards() {
        setVisibleWelcome("hidden");
        setVisibleFlashcards("");
    }

    return(
    <>
        <div className={ `welcome ${ visibleWelcome }` }>
            <div className="bloco">
                <img className="logo" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
                <button onClick={ redirectWelcomeFlashcards }>Iniciar Recall!</button>
            </div>
        </div>

        <div className={ `flashcards ${ visibleFlashcards }` }>
            <div className="header">
                <img className="imageHeader" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
            </div>
            <div className="lista">
                <ul>
                    <li className="perguntas" >
                        <p className="pergunta" >Pergunta 1</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="perguntas" >
                        <p className="pergunta" >Pergunta 2</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="perguntas" >
                        <p className="pergunta" >Pergunta 3</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="perguntas" >
                        <p className="pergunta" >Pergunta 4</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <p className="bottomText">0/4 CONCLUÍDOS</p>
            </div>
        </div>

        <div className="thirdPage" oculto>

        </div>
    </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));