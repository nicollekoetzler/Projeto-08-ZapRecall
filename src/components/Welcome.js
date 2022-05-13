export default function Welcome({ visibleWelcome, redirectWelcomeFlashcards }) {
    return(
        <div className={ `welcome ${ visibleWelcome }` }>
            <div className="bloco">
                <img className="logo" src="assets/image 1.svg" />
                <h1>ZapRecall</h1>
                <button onClick={ redirectWelcomeFlashcards }>Iniciar Recall!</button>
            </div>
        </div>
    )
}