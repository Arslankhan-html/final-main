import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/Card";

const Menu = ({menu, setMenu}) => {
    //load menu items
    //FETCH AND USE EFFECT
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch("http://localhost:8081/menu");
                if (!response.ok) {
                    throw new Error("Failed to fetch menu items");
                }
                const data = await response.json();
                setMenu(data);
            } catch (error) {
                alert("There was an Error loading menu items " + error);
            }
        };
        fetchMenu();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center mt-4">Menu Items</h2>
            <ul className="list-group">
                {menu.map((item) => (
                    <li key={item.id} className="list-group-item d-flex align-items-center">
                        <div>
                            <strong>{item.name}</strong>
                            {item.servingsize}
                            {item.cost}
                            {item.calories}
                            <button>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;