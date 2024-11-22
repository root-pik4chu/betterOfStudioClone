import React, { useState } from "react";
import { motion } from "framer-motion";

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="px-4 py-2 bg-blue-600 text-white rounded">
                Toggle Dropdown
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-2 w-48 p-4 bg-white rounded shadow-lg"
                >
                    <p className="text-gray-700">Dropdown Item 1</p>
                    <p className="text-gray-700">Dropdown Item 2</p>
                    <p className="text-gray-700">Dropdown Item 3</p>
                </motion.div>
            )}
        </div>
    );
}

export default DropDown;
