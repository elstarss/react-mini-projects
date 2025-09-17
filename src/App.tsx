import { useState, useEffect } from "react";
import PhaserGame from "./PhaserGame";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./home";
import { EventBus } from "./phaser/EventBus";
import EmailClone from "./email-clone/EmailClone";
import Login from "./login";
import Hangman from "./hangman";
import "./App.scss";

function GamePage() {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const handler = (newScore: number) => setScore(newScore);
        EventBus.on("score-changed", handler);

        return () => {
            EventBus.off("score-changed", handler);
        };
    }, []);

    return (
        <div style={{ position: "relative" }}>
            <PhaserGame />
            <div
                className="phaser-screen"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 400,
                    color: "white",
                }}
            >
                <h2>Score, react div: {score}</h2>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <Link className="nav__link" to="/">
                    Home
                </Link>
                <Link className="nav__link" to="/project-1">
                    Email clone
                </Link>
                <Link className="nav__link" to="/project-2">
                    Project 2
                </Link>
                <Link className="nav__link" to="/project-3">
                    Hangman
                </Link>
                <Link className="nav__link" to="/project-4">
                    Phaser
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project-1" element={<EmailClone />} />
                <Route path="/project-2" element={<Login />} />
                <Route path="/project-3" element={<Hangman />} />
                <Route path="/project-4" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
