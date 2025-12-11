import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import {useActiveTab} from "./use-active-tab.js";
import {Restaurant} from "../restaurant/Restaurant.jsx";
import { useCallback } from 'react';


export function Tabs({restaurants}) {
    const {activeTab, handleTabClick} = useActiveTab(restaurants);
    const activeRestaurant = restaurants.find(r => r.id === activeTab);

    const handleSegmentChange = useCallback((e) => {
        handleTabClick(e.detail.value);
    }, [handleTabClick]);

    return (
        <div>
            <IonSegment value={activeTab.toString()} onIonChange={handleSegmentChange}>
                {restaurants.map(rest => (
                    <IonSegmentButton key={rest.id} value={rest.id}>
                        <IonLabel>{rest.name}</IonLabel>
                    </IonSegmentButton>
                ))}
            </IonSegment>
            {activeRestaurant && (
                <Restaurant {...activeRestaurant} key={activeTab} />
            )}
        </div>
    );
};
