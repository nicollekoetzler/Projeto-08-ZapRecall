import React from "react";

export default function Questions({ question, shownquestion, answer, setIconBottom, iconBottom }){

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
            setIconBottom([...iconBottom, "checkmark-circle"]);
        } else if(state === "almost"){
            setIconTipe("help-circle");
            setIconBottom([...iconBottom, "help-circle"]);
        } else {
            setIconTipe("close-circle");
            setIconBottom([...iconBottom, "close-circle"]);
        }
    }

    return(
        <>
            <li onClick={ stateQuestion === "" ? redirectQuestionShownQuestion : () => "" } className={ `question ${ visibleQuestion } ${stateQuestion}` }>
                <p className={`questiontext `}  >{ question }</p>
                <ion-icon name={ iconTipe }></ion-icon>
            </li>

            <li className={ `shownquestion ${ visibleShownQuestion }` } >
                <p className="shownquestiontext" >{ shownquestion }</p>
                <img onClick={ redirectShownQuestionAnswer } className="flecha" src="assets/flecha.svg" />
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