"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";



export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

     //handleAddItem
    const handleAddItem = (newItem) => {
        
        setItems([...items, newItem]);
    };
    
    //recipe suggestion
    const handleItemSelect = (selectedItem) => {    
        
        //clean up selected item
        const cleanedName = selectedItem.name.replace(/\p{Emoji}/gu, '').split(',')[0].trim().toLowerCase();
        setSelectedItemName(cleanedName);
    }
      

    return(
        <main className="bg-amber-200">
            <h1 className=" font-bold text-4xl m-4 ">Shopping List</h1>
            <div className="flex">
                <div>
                <NewItem onAddItem = {handleAddItem}></NewItem>
                <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex mt-1">
                    <div className="bg-green-50">
                        <h2 className="font-bond">Meal suggestion</h2>
                        <MealIdeas ingredient={selectedItemName}/> 
                    </div>
                </div>
            </div>
            <Link href="/"  className="m-4 bg-slate-300 rounded-md p-4 ml-4 mt-4 mb-2 py-2 px-2 text-sky-900">Home</Link> 
            
        </main>
    );

};
