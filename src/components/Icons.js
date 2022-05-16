export default function Icons({ iconBottom }){

    const iconsJSX = []

    for(const icon of iconBottom){
        if(icon === "checkmark-circle"){
            iconsJSX.push(<ion-icon style={{color: "#2FBE34"}} name={ icon }></ion-icon>)
        } else if(icon === "help-circle"){
            iconsJSX.push(<ion-icon style={{color: "#FF922E"}} name={ icon }></ion-icon>)
        } else {
            iconsJSX.push(<ion-icon style={{color: "#FF3030"}} name={ icon }></ion-icon>)
        }
    }


    return(
        <div className="bolinhas">
            {iconsJSX}
        </div>
    )
}