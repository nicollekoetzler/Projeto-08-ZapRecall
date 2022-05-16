import Icons from "./Icons"

export default function Bottom( {concluded, result, imgresult, description, iconBottom} ){
    return(
    <>
        <div className="bottom ">
            <p className="bottomText">{ concluded }</p>
            <Icons iconBottom={iconBottom}/>
        </div>
    
        <div className="bottom2 hidden">
            <div className="titleresult">
                <img src={ imgresult }/>
                <p>{ result }</p>
            </div>
            <p className="bottomDescription" >{ description }</p>
            <p className="bottomText">{ concluded }</p>
            <div className="bolinhas">
                <ion-icon name={ iconBottom }></ion-icon>
            </div>
        </div>
    </>
    )
}