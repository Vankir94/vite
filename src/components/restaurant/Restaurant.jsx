import React from "react";
import {List} from "../list/List.jsx";

export function Restaurant({name, menuName, listOfDishes, reviewName, listOfReviews, id}) {
    if (!name) {
        return null;
    }
    return (
        <div>
            <h2>{name}</h2>
            <List listName={menuName} list={listOfDishes} isCount={true}/>
            <List listName={reviewName} list={listOfReviews} isCount={false}/>
        </div>
    );
};
