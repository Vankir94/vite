import {useState} from "react";

export const useActiveTab = restaurants => {
    const [activeTab, setActiveTab] = useState(restaurants?.[0]?.id ?? 0);

    const handleTabClick = (id) => {
        const tabId = typeof id === 'string' ? Number(id) : id;
        setActiveTab(tabId);
    };

    return {
        activeTab,
        handleTabClick
    };
}
