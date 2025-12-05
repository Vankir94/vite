import {Item} from "../item/Item.jsx";
import React from "react";

export function List({listName, list, isCount}) {
    if (!listName) {
        return null;
    }
    return (
        <div>
            {!!list?.length && (
                <>
                    <h3>{listName}</h3>
                    <ul>
                        {list.map((dish, i) => <Item key={i} itemText={dish} isCount={isCount} />)}
                    </ul>
                </>
            )}
        </div>
    );
};
