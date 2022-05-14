export default function Bottom(){
    return(
    <>
        <div className="bottom ">
            <p className="bottomText">0/4 CONCLUÍDOS</p>
            <div className="bolinhas">
                <img src="assets/right.png" alt="" />
            </div>
        </div>
        <div className="bottom2 hidden">
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
    </>
    )
}