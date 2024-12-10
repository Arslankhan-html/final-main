import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu.js";
import Navigation from "./Navigation.js"
import Add from "./Add.js";

function App() {
    const [menu, setMenu] = useState([]);

    return (
        <Router>
            <Navigation />
            <h1>WELCOME TO OUR CAFE</h1>
                <Routes>
                    <Route path="/" element={<div>Welcome to our food Menu!</div>} />
                    <Route path="/menu" element={<Menu 
                        menu={menu}
                        setMenu={setMenu}
                    />} />
                    <Route path="/add" element={<Add
                        menu={menu}
                        setMenu={setMenu}
                    />} />
            </Routes>
            <p></p>
        </Router>
    );
}
export default App;