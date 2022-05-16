import React from "react";

function Questions({ question, shownquestion, answer }){

    const [visibleQuestion, setVisibleQuestion] = React.useState("");
    const [visibleShownQuestion, setVisibleShownQuestion] = React.useState("hidden");
    const [visibleAnswer, setVisibleAnswer] = React.useState("hidden");
    
    const [stateQuestion, setStateQuestion] = React.useState("");
    const [iconTipe, setIconTipe] = React.useState("play-outline");

    function redirectQuestionShownQuestion() {
        setVisibleQuestion("hidden");
        setVisibleShownQuestion("");
    }

    function redirectShownQuestionAnswer() {
        setVisibleShownQuestion("hidden");
        setVisibleAnswer("");
    }

    function redirectButtonQuestion(state) {
        setVisibleAnswer("hidden");
        setVisibleQuestion("");
        setStateQuestion(state);
        choseIcon(state);
    }

    function choseIcon(state) {
        if(state === "right"){
            setIconTipe("checkmark-circle");
        } else if(state === "almost"){
            setIconTipe("help-circle")
        } else {
            setIconTipe("close-circle")
        }
    }



    return(
        <>
            <li onClick={ stateQuestion === "" ? redirectQuestionShownQuestion : () => "" } className={ `question ${ visibleQuestion } ${stateQuestion}` }>
                <p className={`questiontext `}  >{ question }</p>
                <ion-icon name={ iconTipe }></ion-icon>
            </li>

            <li onClick={ redirectShownQuestionAnswer } className={ `shownquestion ${ visibleShownQuestion }` } >
                <p className="shownquestiontext" >{ shownquestion }</p>
                <img  className="flecha" src="assets/flecha.svg" />
            </li>

            <li className={ `answer ${ visibleAnswer }` } >
                <p className="answertext" >{ answer }</p>
                <div className="botoes">
                    <div onClick={ () => redirectButtonQuestion("wrong") } className="wrongButton">
                        <p className="buttontext" >Não lembrei</p>
                    </div>
                    <div onClick={ () => redirectButtonQuestion("almost") } className="almostButton">
                        <p className="buttontext" >Quase não lembrei</p>
                    </div>
                    <div onClick={ () => redirectButtonQuestion("right") } className="rightButton">
                        <p className="buttontext" >Zap!</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default function Lista(){

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

    return (
        <div className="lista">
            <ul>
                {itemsQuestions.map((item, index) => <Questions key={index} question={item.question} shownquestion={item.shownquestion} answer={item.answer} />)}
            </ul>
        </div>
    )
}