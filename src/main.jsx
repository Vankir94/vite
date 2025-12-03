import { createRoot } from 'react-dom/client';
import MY_RESTAURANTS from './materials/mock.js';

createRoot(document.getElementById('root')).render(
    <div>
            <h2>{MY_RESTAURANTS.name}</h2>

            <h3>{MY_RESTAURANTS.menuName}</h3>
            <ul>
                    {MY_RESTAURANTS.listOfDishes.map(dish => <li>{dish}</li>)}
            </ul>

            <h3>{MY_RESTAURANTS.reviewName}</h3>
            <ul>
                    {MY_RESTAURANTS.listOfReviews.map(review => <li>{review}</li>)}
            </ul>
    </div>
)
