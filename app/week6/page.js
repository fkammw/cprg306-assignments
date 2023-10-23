"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

// let products = itemsData.map((product) => ({
//     id: product.id,
//     name: product.name,
//     quantity: product.quantity,
//     category: product.category,        
// }));

export default function Page(){

    const [items, setItems] = useState(itemsData);
    //const [items, setItems] = useState(itemsData.map((product) => ({...product})));

    //handleAddItem
    const handleAddItem = (item) => {
        
        setItems([...items, item]);
    };

    return(
        <div className="bg-amber-200">
            <h1 className=" font-bold text-4xl m-4 ">Shopping List</h1>
            <div><NewItem onAddItem = {handleAddItem}></NewItem></div>
            <div><ItemList items={items} /> </div>
            
            
        </div>
    );
}