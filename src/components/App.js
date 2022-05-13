import React from "react";
import Welcome from "./Welcome";
import Flashcards from "./Flashcards";

export default function App(){
    const [ visibleWelcome, setVisibleWelcome ] = React.useState("");
    const [ visibleFlashcards, setVisibleFlashcards ] = React.useState("hidden");

    function redirectWelcomeFlashcards() {
        setVisibleWelcome("hidden");
        setVisibleFlashcards("");
    }

    return(
    <>
        <Welcome redirectWelcomeFlashcards={redirectWelcomeFlashcards} visibleWelcome={visibleWelcome} />
        <Flashcards redirectWelcomeFlashcards={redirectWelcomeFlashcards} visibleFlashcards={visibleFlashcards} />
    </>
    );
}