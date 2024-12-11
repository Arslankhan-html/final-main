import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import {Card, Form, Button} from "react-bootstrap";

const Add = () => {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [cost, setCost] = useState("");
    const [category, setCategory] = useState("");
    const [servingsize, setServingsize] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        //Call to post
        addFoodItem();
         //Clean hooks for next call
        setName("");
        setCalories("");
        setCost("");
        setCategory("");
        setServingsize("");
    };

    const addFoodItem = async() => {
        try {
            // const formData = new FormData();
            // formData.append("name", name);
            // formData.append("calories", calories);
            // formData.append("cost", cost);
            // formData.append("category", category);
            // formData.append("servingsize", servingsize);
            
            //Make a food object
            const foodData = {
                name,
                calories,
                cost,
                category,
                servingsize
            };


            //send form to backend
            const response = await fetch("http://localhost:8081/menu", {
                method: "POST",
                // body: formData,
                
                //turn foodData into Json format
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(foodData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                alert("Error: " + errorData.error);
            } else {
                const successMessage = await response.text();
                alert(successMessage);
            }
        } catch (err) {
            alert("An error occurred :"+err)
        } 
        
    }
    
    return (
    <div className="container mt-4 w-50" >
        <Card bg="dark" text="light" border="dark">
            <Card.Header as="h1" className="text-center m-2">Add Food Item</Card.Header>
            <Card.Body>
                
                <Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Name</Form.Label>
                            <Form.Control size="lg" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Calories</Form.Label>
                            <Form.Control size="lg" type="text" className="form-control" value={calories} onChange={(e) => setCalories(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Cost</Form.Label>
                            <Form.Control size="lg" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Category</Form.Label>
                            <Form.Control size="lg" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Serving Size</Form.Label>
                            <Form.Control size="lg" className="form-control" value={servingsize} onChange={(e) => setServingsize(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="outline-success">
                            Add Food Item
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
};
export default Add;

