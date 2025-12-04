import React, {useState} from "react";

export function Tab({children, id, name}) {
    const [activeTab, setActiveTab]  = useState(1);
    return (
        <div>
            <button onClick={() => setActiveTab(() => id)}>{name}</button>

            {activeTab === id &&
                <div>
                    {children}
                </div>}
        </div>
    );
};
