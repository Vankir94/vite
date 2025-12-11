import {useState} from "react";

export const useActiveTab = restaurants => {
    const [activeTab, setActiveTab] = useState(restaurants?.[0]?.id ?? 0);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return {
        activeTab,
        handleTabClick
    };
}
