import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Add from "./Add.js";
import Menu from "./Menu.js";
import Navigation from "./Navigation.js";

function App() {
    const [menu, setMenu] = useState([]);

    return (
        <div style = {{backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664191867501-c3d91c4bb25d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Router>
            <Navigation />
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
        </div>
    );
}
export default App;