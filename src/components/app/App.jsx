import MY_RESTAURANTS from "../../materials/mock.js";
import {Restaurant} from "../restaurant/Restaurant.jsx";
import {Layout} from "../layout/Layout";

export const App = ({title}) => {
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                {MY_RESTAURANTS.map((
                    {name, menuName, listOfDishes, reviewName, listOfReviews}
                ) => <Restaurant name={name}
                                 menuName={menuName}
                                 listOfDishes={listOfDishes}
                                 reviewName={reviewName}
                                 listOfReviews={listOfReviews}/>)}

            </div>
        </Layout>
    );
};
