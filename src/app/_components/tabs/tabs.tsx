"use client";
import { useState } from "react";
import { TabsProps } from "./tasb.types";

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className="tab">
      <div className="tab-labels">
        {tabs.map((tab, index) => (
          <a
            key={`tab-${index}`}
            className={`tab-label ${index === active ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </a>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className="tab-content"
          key={`tab-content-${index}`}
          style={{ display: index === active ? "block" : "none" }}
        >
          {typeof tab.content === "string" ? (
            <div
              dangerouslySetInnerHTML={{ __html: tab.content as TrustedHTML }}
            />
          ) : (
            tab.content
          )}
        </div>
      ))}
    </div>
  );
};
