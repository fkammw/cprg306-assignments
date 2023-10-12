"use client";

import { useState } from "react";


export default function NewItem() 
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemAdded, setItemAdded] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`${name}, ${quantity}, ${category}`);
 
        const newItem = {
            name,
            quantity,
            category,
        };

        console.log(newItem);

        setItemAdded(true);

        //reset form
        setName("");
        setQuantity(1);
        setCategory("");
    };
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQtyChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
        <div className="min-h-screen bg-grey flex items-start justify-center ">
            <form onSubmit={handleSubmit} className="bg-black ">
                <div className="mb-4 flex-1 mt-1 m-1 w-full">
                <input
                    className="rounded-md flex mb-4"
                    required
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={handleNameChange}>
                </input>
                
                
                <input 
                    className="rounded-md flex-1 mr-2 p-1"
                    required
                    type="number"
                    min="1"
                    max="99"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={handleQtyChange}>
                </input>
                
                
                <select
                    className="rounded-md flex-1 mr-2"
                    required
                    value={category}
                    onChange={handleCategoryChange}>
                    
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Food">Frozen Food</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>   
                        <option value="Beverages">Beverages</option>                     
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                </select>
                </div>
                <button 
                    type="submit" className="bg-blue-500 rounded-md p-4 mb-4 py-2 px-4 w-full  text-white">+</button>

            </form>
        </div>
        </main>
    );


}