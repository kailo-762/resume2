"use client";

import { useState } from "react";

export const BeginningHeading = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  // --- RENDER ---

  return (
    <h2 className="text-2xl mb-4 font-bold text-white-500">
      <span onClick={handleToggleCollapse} style={{ cursor: "pointer" }}>
        {isCollapsed ? "▼" : "▲"} Ankommen im Marroc Land (02.10. - 04.10.2023)
      </span>
    </h2>
  );
};
