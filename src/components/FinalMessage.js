export default function FinalMessage({iconBottom}){
    let titleMessage;
    let description;

    if(iconBottom.includes("close-circle")){
        titleMessage = <p>&#128549; Putz...</p>
        description = <p className="bottomDescription">Ainda faltam alguns... Mas não desanime!</p>
    } else {
        titleMessage = <p>&#129395; Parabéns!</p>
        description = <p className="bottomDescription">Você não esqueceu de nenhum flashcard!</p>
    }

    return(
        <>
            <div className="titleresult">
                {titleMessage}
            </div>
            {description}
        </>
    )
}