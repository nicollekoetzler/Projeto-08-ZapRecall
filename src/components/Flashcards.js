import React from "react";
import Lista from "./Lista"
import Bottom from "./Bottom"

export default function Flashcards({ visibleFlashcards }){
    const itemsQuestions = [
        {
            question: "Pergunta 1",
            shownquestion: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "Pergunta 2",
            shownquestion: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Pergunta 3",
            shownquestion: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        {
            question: "Pergunta 4",
            shownquestion: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            question: "Pergunta 5",
            shownquestion: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes "
        },
        {
            question: "Pergunta 6",
            shownquestion: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Pergunta 7",
            shownquestion: "Usamos props para __",
            answer: "passar diferentes informações para componentes "
        },
        {
            question: "Pergunta 8",
            shownquestion: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ]

    const [ iconBottom, setIconBottom ] = React.useState([]);

    return(
        <div className={ `flashcards ${ visibleFlashcards }` }>
            <div className="header">
                <img className="imageHeader" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
            </div>
            <Lista setIconBottom={setIconBottom} iconBottom={iconBottom} itemsQuestions={itemsQuestions} />
            <Bottom iconBottom={iconBottom} qtdQuestions={itemsQuestions.length} />
        </div>
    )
}