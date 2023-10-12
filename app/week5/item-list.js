
"use client";

import { useState } from "react";
import itemsData from "./items.json";
import Item from "./item";



function RenderSortBy(setSortBy) {

     //for onclick
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
            <button
                id="grouped category"
                onClick={(e) => setSortBy(e.target.id)}
                className="bg-rose-400 m-2 p-2 w-50 text-white ">
                Grouped Category
            </button> 
        </div>
    );
        
}

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    

    let products = itemsData.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        category: product.category,        
    }));
    
    //sort by name or category or grouped category
    if (sortBy === "name") {
        products.sort((a,b) => a.name.localeCompare(b.name));
    } 
    if (sortBy === "category") {
        products.sort((a,b) => a.category.localeCompare(b.category));
    }
    if (sortBy === "grouped category") {
        products.sort((a,b) => a.category.localeCompare(b.category));

        const groupedByCategory = products.reduce((acc, item) => {
            const cat = item.category;
            if (!acc[cat]) {
                acc[cat] = [];
            }
            acc[cat].push(item);
            return acc;
        }, {});

        //adding for loop to sort items within category by order
        for (const i in groupedByCategory) {
            groupedByCategory[i].sort((a, b) => a.name.localeCompare(b.name));
        } 
    

    //for grouped category return
    return (
        <main>
            {RenderSortBy(setSortBy)}
            {Object.keys(groupedByCategory).map((category) => (
                <div key={category}>
                    <label className="ml-4 text-lg font-bold capitalize">{category}</label>
                    {groupedByCategory[category].map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </div>
            ))}
        </main>
    );
    }
                    
    
    //for name and category return 
    return (
        <main>
            
            {RenderSortBy(setSortBy)}
            
            {products.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}/>
            ))}
            
        </main>
    ) ;
            
}