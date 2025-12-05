import {useState, useCallback} from "react";
import MY_RESTAURANTS from "../../materials/mock.js";

export const useTab = () => {
    const [activeTab, setActiveTab]  = useState(MY_RESTAURANTS[0].id);

    const handleTabClick = useCallback(id => {
        setActiveTab(currentId => {
            if (currentId === id) {
                return currentId;
            }
            return id;
        })
    }, [activeTab]);
    return {
        activeTab,
        handleTabClick
    };
}
