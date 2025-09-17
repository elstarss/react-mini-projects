import "./index.scss";
import { wordsToGuess } from "./data";
import { languagesToKill } from "./data";

import alphabet from "./data";
import { useState } from "react";
import Status from "./components/Status";
import LetterCard from "./components/LetterCard";
import LanguageCard from "./components/LanguageCard";
import { nanoid } from "nanoid";

export default function Hangman() {
    const [currentWord, setCurrentWord] = useState(genNewWord());

    const keyboardElements = alphabet.map((letter) => {
        return (
            <button key={letter} className="keyboard-letter">
                {letter}
            </button>
        );
    });

    function genNewWord() {
        const randomNumber = Math.ceil(Math.random() * wordsToGuess.length);
        let wordToGuess = wordsToGuess[randomNumber];
        return wordToGuess;
    }

    const languageElements = languagesToKill.map((language) => (
        <LanguageCard
            name={language.name}
            backgroundColor={language.backgroundColor}
            color={language.color}
            key={language.name}
        />
    ));

    let letters: string[] = currentWord.split("");

    const letterElements = letters.map((letter) => {
        return (
            <span key={letter} className="letter-element">
                {letter.toUpperCase()}
            </span>
        );
    });

    function newGame() {
        setCurrentWord(genNewWord);
    }

    return (
        <div className="hangman-page">
            <h1>Hangman</h1>
            <h2>
                Guess the word in 8 attempts to save these languages from being
                wiped out!
            </h2>
            <Status win={true} />
            <div className="languages-box"> {languageElements}</div>
            <div className="letter-box">{letterElements}</div>
            <div>{keyboardElements}</div>
            <button onClick={newGame}>New game?</button>
        </div>
    );
}
