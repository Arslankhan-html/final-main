import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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
            const formData = new FormData();
            formData.append("name", name);
            formData.append("calories", calories);
            formData.append("cost", cost);
            formData.append("category", category);
            formData.append("servingsize", servingsize);
            //send form to backend
            const response = await fetch("http://localhost:8081/menu", {
                method: "POST",
                body: formData,
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
    <div className="container mt-4">
        <h2 className="text-center">Add Food Item</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Calories</label>
                <input type="text" className="form-control" value={calories} onChange={(e) => setCalories(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Cost</label>
                <input className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Category</label>
                <input className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Serving Size</label>
                <input className="form-control" value={servingsize} onChange={(e) => setServingsize(e.target.value)} ></input>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Food Item
            </button>
        </form>
    </div>
    );
};
export default Add;