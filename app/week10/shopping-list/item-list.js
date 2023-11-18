"use client";

import { useState } from "react";
//import itemsData from "./items.json";
import Item from "./item.js";



function RenderSortBy(setSortBy) {

     //for sorting
    const handleSort = (event) => {
        setSortBy(event.target.id);
    };

    return (
        <div className="flex items-center">
            <label className="ml-4 font-medium">Sort by: </label>
            <button
                id="name"
                onClick={handleSort}
                className="bg-cyan-500 m-2 p-2 w-30 text-white">
                Name
            </button>
            <button
                id="category"
                onClick={handleSort}
                className="bg-violet-400 m-2 p-2 w-30 text-white">
                Category
            </button>
        </div>
    );
        
}



export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    
    
    if (sortBy === "name") {
        items.sort((a,b) => a.name.localeCompare(b.name));
    } 
    if (sortBy === "category") {
        items.sort((a,b) => a.category.localeCompare(b.category));
    }
     
    
    //for name and category return 
    return (
        <div>
            
            {RenderSortBy(setSortBy)}
            
            {items.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    //to trigger handleClickItem
                    onSelect={()=> onItemSelect(item)}/>
                    
            ))}
             
        </div>
    ) ;
            
}