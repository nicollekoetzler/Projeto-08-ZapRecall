export default function Bottom( {concluded, result, imgresult, description, imgbolinha} ){
    return(
    <>
        <div className="bottom hidden">
            <p className="bottomText">{ concluded }</p>
            <div className="bolinhas">
                <img src={ imgbolinha }/>
            </div>
        </div>
    
        <div className="bottom2 ">
            <div className="titleresult">
                <img src={ imgresult }/>
                <p>{ result }</p>
            </div>
            <p className="bottomDescription" >{ description }</p>
            <p className="bottomText">{ concluded }</p>
            <div className="bolinhas">
                <img src={ imgbolinha }/>
            </div>
        </div>
    </>
    )
}