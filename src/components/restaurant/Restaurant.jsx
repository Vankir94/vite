import React from "react";

export function Restaurant({name, menuName, listOfDishes, reviewName, listOfReviews}) {
    if (!name) {
        return null;
    }
    return (
        <React.Fragment>
            <div>
                <h2>{name}</h2>
                {!!listOfDishes?.length && (
                    <>
                        <h3>{menuName}</h3>
                        <ul>
                            {listOfDishes.map(dish => <li>{dish}</li>)}
                        </ul>
                    </>
                )}
                {!!listOfReviews?.length && (
                    <>
                        <h3>{reviewName}</h3>
                        <ul>
                            {listOfReviews.map(review => <li>{review}</li>)}
                        </ul>
                    </>
                )}

            </div>
            <div>
                hello
            </div>
        </React.Fragment>
    );
};
