"use client";

import { useState } from "react";
import React from "react";
import {InputNumber} from 'rsuite';

export default function NewItem() 
{
    const [itemName, setItemName] = useState("");
    const [itemQty, setItemQty] = useState(0);
    const [itemCategory, setItemCategory] = useState("");
    const [itemAdded, setItemAdded] = useState(false);

    const submitFunction = (event) => {
        event.preventDefault();       
    }

    const handleSubmit = () => {
        //event.preventDefault();

        alert(`${itemName}, ${itemQty}, ${itemCategory}`);

       

        setItemAdded(true);
        setItemName("");
        setItemQty("");
        setItemCategory("");
    };    

    const handleNameChange = (event) => {
        setItemName(event.target.value);
    };

    const handleQtyChange = (event) => {
        setItemQty(event);
    };

    const handleCategoryChange = (event) => {
        setItemCategory(event.target.value);
    };

    return (
        <main>
        <div className="bg-gray-300">
            <form onSubmit={submitFunction} >
                <label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={handleNameChange}></input></label>
                <label>
                <InputNumber
                    min={1}
                    max={99}
                    defaultValue={1}
                    value={itemQty}
                    onChange={handleQtyChange}></InputNumber></label>
                <label>
                <select 
                    className="form-control"
                    value={itemCategory}
                    onChange={handleCategoryChange}
                    >
                        <option>Produce</option>
                        <option>Dairy</option>
                        <option>Bakery</option>
                        <option>Meat</option>
                        <option>Frozen Food</option>
                        <option>Canned Goods</option>
                        <option>Dry Goods</option>   
                        <option>Beverages</option>                     
                        <option>Snacks</option>
                        <option>Household</option>
                        <option>Other</option>
                    </select></label>
                <br></br>
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add Item</button>
            </form>
        </div>
        </main>
    );

}
