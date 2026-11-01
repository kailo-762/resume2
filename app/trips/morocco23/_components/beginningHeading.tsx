"use client";

import { useState } from "react";

export const BeginningHeading = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
    };

    // --- RENDER ---

    return (
        <h2 className="text-white-500 mb-4 text-2xl font-bold">
            <span onClick={handleToggleCollapse} style={{ cursor: "pointer" }}>
                {isCollapsed ? "▼" : "▲"} Ankommen im Marroc Land (02.10. - 04.10.2023)
            </span>
        </h2>
    );
};
