import FinalMessage from "./FinalMessage";
import Icons from "./Icons";

export default function Bottom( {iconBottom, qtdQuestions} ){

    return(
    <>
        <div className="bottom ">
            { iconBottom.length === qtdQuestions ? <FinalMessage iconBottom={iconBottom}/> : <></> }
            <p className="bottomText">{ `${iconBottom.length}/${qtdQuestions} CONCLUÍDOS` }</p>
            <Icons iconBottom={iconBottom}/>
        </div>
    </>
    )
}