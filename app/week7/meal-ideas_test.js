"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient){
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meal;
    } catch (error) {
        console.error(error);
    }    
}

export default function MealIdea({ingredient}) {
    const [meal, setMeal] = useState([]);

    async function loadMealIdeas(ingredient){
        const dataM = await fetchMealIdeas(ingredient);
        setMeal(dataM);
        //console.log(Object.keys(dataM));
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas(ingredient);
        }
    }, [ingredient]);


//----------------------------------------------------------------------------------------------------------------
// export default function MealIdea({ingredient}) {
//     const [meal, setMeal] = useState([]);

//     async function fetchMealIdeas(ingredient){
//         try {
//             const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//             const data = await response.json();
//             return data.meal;
//         } catch (error) {
//             console.error(error);
//         }    
//     }

//     async function loadMealIdeas(){
//         try {
//             const dataM = await fetchMealIdeas(ingredient);
//             setMeal(dataM);
//             console.log(Object.keys(dataM));
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     /*useEffect(() => {
//         loadMealIdeas();
//     }, [ingredient]);*/

//     useEffect(() => {
//         if (ingredient) {
//             loadMealIdeas();
//         }
//     }, [ingredient]);

    return (
        <div>
            <ul>
                {meal && meal.map((m) => (
                    <li key={m.idMeal}>
                        {m.strMeal}
                    </li>
                ))}
             </ul>
        </div>
    )

}

