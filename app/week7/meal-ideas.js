"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const dataM = await fetchMealIdeas(ingredient);
        setMeals(dataM);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    function showMeal() {
        if (!ingredient) {
            return <p>Please select an item from the list</p>;
        } else if (meals.length === 0) {
            return <p>No meal ideas found</p>;
        } else {
            return (
                <div>
                    <h1>Meal ideas</h1>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal}>
                                {meal.strMeal}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    return (
        <div>
            {showMeal()}
        </div>
    );
}
