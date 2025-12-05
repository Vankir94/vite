import React from "react";
import MY_RESTAURANTS from "../../materials/mock.js";
import {useActiveTab} from "./use-active-tab.js";
import {Restaurant} from "../restaurant/Restaurant.jsx";

export function Tabs({restaurants}) {
    const {activeTab, handleTabClick} = useActiveTab(restaurants);
    const activeRestaurant = restaurants.find(r => r.id === activeTab);

    return (
        <div>
            {restaurants.map(rest => (
                <button onClick={() => handleTabClick(rest.id)}>{rest.name}</button>
            ))}
            {activeRestaurant && (
                <Restaurant {...activeRestaurant} key={activeTab} />
            )}
        </div>
    );
};
