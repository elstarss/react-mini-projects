import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./home";
import EmailClone from "./email-clone/EmailClone";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/project-1">Project 1</Link> |{" "}
                <Link to="/contact">Project 2</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                {/* {/* <Route path="/project-1" element={<P1 />} /> */}
                <Route path="/project-1" element={<EmailClone />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
