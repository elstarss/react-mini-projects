import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./home";
import EmailClone from "./email-clone/EmailClone";
import "./App.scss";

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
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project-1" element={<EmailClone />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
