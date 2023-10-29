"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdea from "./meal-ideas";



export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

     //handleAddItem
    const handleAddItem = (newItem) => {
        
        setItems([...items, newItem]);
    };
    
    const handleItemSelect = (selectedItem) => {
        console.log(`Selected: ${selectedItem}`);
        //clean up selected item
        const cleanedName = selectedItem.name.replace(/\p{Emoji}/gu, '').split(',')[0].trim().toLowerCase();
        setSelectedItemName(cleanedName);
        //console.log(cleanedName);}
    };

   

    return(
        <div className="bg-amber-200">
            <h1 className=" font-bold text-4xl m-4 ">Shopping List</h1>
            <div>
                <NewItem onAddItem = {handleAddItem}></NewItem>
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div>
                <MealIdea ingredient={selectedItemName}/> 
            </div>
            
            
        </div>
    );
}