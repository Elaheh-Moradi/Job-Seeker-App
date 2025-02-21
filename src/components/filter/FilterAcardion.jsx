import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const FilterAcardion = ({ title, content, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const smallMode = useSelector((state) => state.filter.smallMode);

  useEffect(() => {
    setIsOpen(smallMode); // Update state if smallMode changes
  }, [smallMode]);

  return (
    <div className="border-b">
      <button
        className="w-full text-left p-3 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {Icon && (
            <Icon
              style={{
                color: "#ccc",
                height: "16px",
              }}
            />
          )}
          <span className="text-[#444444] text-[16px] font-bold">{title}</span>
        </div>
        <span className="text-[#9d9d9d] text-[12px]">{isOpen ? "▲" : "▼"}</span>
      </button>
      <div
        className={`bg-white overflow-hidden border-t  transition-height duration-[100ms] ease-in-out ${
          isOpen ? "max-h-[200px]" : "max-h-[0px]"
        } `}
      >
        <div className={`${isOpen ? "pt-4" : ""} ${isOpen ? "pr-3" : "pr-4"}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default FilterAcardion;
