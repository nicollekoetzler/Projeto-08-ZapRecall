function Questions({ question, shownquestion, answer }){

    return(
        <>
            <li className="question" >
                <p className="questiontext " >{ question }</p>
                <img src="assets/Vector.svg" />
            </li>

            <li className="shownquestion hidden" >
                <p className="shownquestiontext" >{ shownquestion }</p>
                <img  className="flecha" src="assets/flecha.svg" />
            </li>

            <li className="answer hidden" >
                <p className="answertext" >{ answer }</p>
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
                    {itemsQuestions.map(item => <Questions question={item.question} shownquestion={item.shownquestion} answer={item.answer} />)}
                </ul>
            </div>
    )
}