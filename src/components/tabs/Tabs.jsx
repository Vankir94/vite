import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import {useActiveTab} from "./use-active-tab.js";
import {Restaurant} from "../restaurant/Restaurant.jsx";

export function Tabs({restaurants}) {
    const {activeTab, handleTabClick} = useActiveTab(restaurants);
    const activeRestaurant = restaurants.find(r => r.id === activeTab);

    return (
        <div>
            <IonSegment value={activeTab.toString()} onIonChange={(e) => handleTabClick(e.detail.value)}>
                {restaurants.map(rest => (
                    <IonSegmentButton key={rest.id} value={rest.id.toString()}>
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
