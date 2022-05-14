export default function Flashcards({ visibleFlashcards }){
    return(
        <div className={ `flashcards ${ visibleFlashcards }` }>
            <div className="header">
                <img className="imageHeader" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
            </div>
            <div className="lista">
                <ul>
                    <li className="question " >
                        <p className="questiontext " >Pergunta 1</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="shownquestion hidden" >
                        <p className="shownquestiontext" >O que é JSX?</p>
                        <img  className="flecha" src="assets/flecha.svg" alt="" />
                    </li>
                    <li className="answer hidden" >
                        <p className="answertext" >Uma extensão de linguagem do JavaScript</p>
                        <div className="botoes">
                            <div className="botao1">
                                <p className="buttontext" >Não lembrei</p>
                            </div>
                            <div className="botao2">
                                <p className="buttontext" >Quase não lembrei</p>
                            </div>
                            <div className="botao3">
                                <p className="buttontext" >Zap!</p>
                            </div>
                        </div>
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 2</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 3</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 4</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 5</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 6</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 7</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                    <li className="question" >
                        <p className="questiontext" >Pergunta 8</p>
                        <img src="assets/Vector.svg" alt="" />
                    </li>
                </ul>
            </div>
            <div className="bottom hidden">
                <p className="bottomText">0/4 CONCLUÍDOS</p>
                <div className="bolinhas">
                    <img src="assets/right.png" alt="" />
                </div>
            </div>
            <div className="bottom2">
                <div className="titleresult">
                    <img src="assets/party.png" alt="" />
                    <p>Parabéns!</p>
                </div>
                <p className="bottomDescription" >Você não esqueceu de nenhum flashcard!</p>
                <p className="bottomText">0/4 CONCLUÍDOS</p>
                <div className="bolinhas">
                    <img src="assets/right.png" alt="" />
                </div>
            </div>
        </div>
    )
}