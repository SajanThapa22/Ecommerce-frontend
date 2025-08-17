import React from "react";
import { FaChevronDown } from "react-icons/fa";

const LanguageDropdown = () => {
  return (
    <div className="text-white text-sm flex gap-[5px] items-center">
      <span>English</span>
      <FaChevronDown />
    </div>
  );
};

export default LanguageDropdown;
