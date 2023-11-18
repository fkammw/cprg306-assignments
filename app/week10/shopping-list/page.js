"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
//import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";



export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

    //integration with firebase
    const loadItems = async () => {
        try {
            if (user) { //check if user is logged in
                //use actual user id
                const userId = user.uid;
                const data = await getItems(userId);
                setItems(data);
            } else {
                setItems([]); //clear items if a user is not logged in
            }           
        } catch (error) {
            console.error("Error loading items: ", error);
        }
    };

    //pass through the user.uid in order to re-run loadItems whenever the user changes
    useEffect(() => {
        if (user) {
            loadItems();
        }    
    }, [user.uid]);


     //handleAddItem
    const handleAddItem = async(newItem) => {
        if (!user) {
            console.error("Wrong user");
            return;
        }
        const docId = await addItem(user.uid, newItem);
        //update to include new item with id return from firebase
        setItems([...items, {...newItem, docId}]);
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
