import React from "react";
import MY_RESTAURANTS from "../../materials/mock.js";
import {useTab} from "./use-tab.js";
import {Restaurant} from "../restaurant/Restaurant.jsx";

export function Tab() {
    const {activeTab, handleTabClick} = useTab();
    return (
        <div>
            {MY_RESTAURANTS.map(e => <button onClick={() => handleTabClick(e.id)}>{e.name}</button>)}
            <>
                {MY_RESTAURANTS.map((
                    {
                        name,
                        menuName,
                        listOfDishes,
                        reviewName,
                        listOfReviews,
                        id
                    }
                ) => activeTab === id && <Restaurant id={id}
                                                     name={name}
                                                     menuName={menuName}
                                                     listOfDishes={listOfDishes}
                                                     reviewName={reviewName}
                                                     listOfReviews={listOfReviews}/>)}
            </>
        </div>
    );
};
