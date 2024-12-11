import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import {Card, ListGroup, ListGroupItem, Container, Row, Col} from "react-bootstrap";


const Menu = ({menu, setMenu}) => {


    //states used to update previous information
    const [showPopUp, setPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); 
    const [newName, setNewName] = useState("");
    const [newCalories, setNewCalories] = useState("");
    const [newCost, setNewCost] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newServingSize, setNewServingSize] = useState("");




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
    
 
    //delete item
    const deleteItem = async(id) =>
    {
        try
        {
            //send id to backend
            const response = await fetch(`http://localhost:8081/menu/${id}`, {
                method: 'DELETE',
            } );
            
            if(!response.ok)
            {
                throw new Error("Failed to delete menu item");
            }
            //Takes the menu and sets it to a state without item 
            setMenu(deleteState => deleteState.filter(item => item.id !== id));
        }
        catch(e)
        {
            alert("There was an error deleting the item: " + e);
        }
    };


    
    //updates the selected item using the id
    const updateItem = async() =>
    {
        try
        {
            const newFoodData = {
                name: newName,
                calories: newCalories,
                cost: newCost,
                category: newCategory,
                servingsize: newServingSize
            };

            const response = await fetch(`http://localhost:8081/menu/${selectedItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFoodData),
            } );

            if(response.ok)
            {
                    alert("YAY to update menu item");

            }
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
            setPopUp(false);


        }
        catch(e)
        {
            alert("There was an Error updating menu items " + e);

        }
    };

    const PopUp = (item) => {
        setSelectedItem(item);
        setNewName(item.name);
        setNewCalories(item.calories);
        setNewCost(item.cost);
        setNewCategory(item.category);
        setNewServingSize(item.servingsize);
        setPopUp(true);
    };


    return (
        <div className="container mt-4 w-50">
            <Card bg="dark" text="light" border="dark">
                <Card.Header as="h1" className="text-center m-2">Menu Items</Card.Header>
                <ListGroup variant="flush"> 
                    {menu.map((item) => (
                        <ListGroup.Item action variant="dark">
                            <Container>
                                <Row className="align-items-center">
                                <Col className="w-25 text-center"><strong>{item.name}</strong></Col>
                                <Col className="w-25  text-center">Serving Size: {item.servingsize}</Col>
                                <Col className="w-25 text-center">${item.cost}</Col>
                                <Col className="w-25 text-center">{item.calories} calories</Col>
                                <Col className="w-25 text-center">                                  
                                <button class="btn custom-btn" onClick={() => deleteItem(item.id)}>  <i class="bi bi-x" ></i></button>
                                
                                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>
                                <button  className="btn custom-btn" onClick={() => PopUp(item)}> <i className="bi bi-pencil"></i></button>
                                </Col>
                                </Row>
                                

                            </Container>
                            
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>

                {/* Bootstrap Popup Modal*/}
            {showPopUp && selectedItem && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Menu Item</h5>
                                    <span aria-hidden="true">&times;</span>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Calories</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newCalories}
                                            onChange={(e) => setNewCalories(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Cost</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newCost}
                                            onChange={(e) => setNewCost(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newCategory}
                                            onChange={(e) => setNewCategory(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Serving Size</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newServingSize}
                                            onChange={(e) => setNewServingSize(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                            
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setPopUp(false)}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={updateItem}>Update</button>
                            </div>
                            </div>
                    </div>
                </div>
            )}
        </div>



        
    );
};

export default Menu;