import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {motion} from 'framer-motion'

const Dropbox = ({setPriority}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("");

  const options = [
    { value: "High", label: "High", color: "text-red-600" },
    { value: "Low", label: "Low", color: "text-green-600" },
  ];
  const handleSelected=(e,value)=>{
    e.preventDefault();
    setSelectedPriority(value);
    setPriority(value);
    setIsOpen(false);
  }
  return (
    <div className="relative w-40">
      {/* Dropdown Button */}
      <button
      type="button"
        className="bg-gray-200 w-full flex items-center justify-between px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedPriority ? (
          <span className="font-medium">
            {options.find((opt) => opt.value === selectedPriority)?.label}
          </span>
        ) : (
          <span className="text-gray-500">Select Priority</span>
        )}
        <ChevronDown className="h-5 w-5 text-gray-600" />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        
        <div className="absolute left-0 w-full bg-white shadow-md rounded-md mt-2 overflow-hidden z-10">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition ${
                selectedPriority === option.value ? "bg-gray-200" : ""
              }`}
              onClick={(e) => handleSelected(e,option.value)}
            >
              <span className={option.color}>{option.label}</span>
              {selectedPriority === option.value && <Check className="h-4 w-4 text-gray-700" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropbox;
