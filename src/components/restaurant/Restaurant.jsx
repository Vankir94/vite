import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import {List} from "../list/List.jsx";
import {ReviewForm} from "../review-form/ReviewForm.jsx";

export function Restaurant({name, menuName, listOfDishes, reviewName, listOfReviews, id}) {
    if (!name) {
        return null;
    }
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <List listName={menuName} list={listOfDishes} isCount={true}/>
                <List listName={reviewName} list={listOfReviews} isCount={false}/>
                <ReviewForm />
            </IonCardContent>
        </IonCard>
    );
};
