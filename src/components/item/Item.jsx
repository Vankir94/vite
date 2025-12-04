import React from "react";
import {Count} from "../count/Count";

export function Item({itemText , isCount}) {
    return (
        <>
            <li>{itemText}</li>
            {isCount && <Count/>}
        </>
    );
};
