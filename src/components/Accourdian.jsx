import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleOption = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            title: "Option 1",
            content: (
                <div>
                    <p>This is the content for option 1, with additional details.</p>
                    <div className="mt-2 space-x-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">Link 1</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded">Link 2</button>
                    </div>
                </div>
            )
        },
        {
            title: "Option 2",
            content: (
                <div>
                    <p>Option 2 content goes here with a description.</p>
                    <div className="mt-2 space-x-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">Link A</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded">Link B</button>
                    </div>
                </div>
            )
        },
        {
            title: "Option 3",
            content: (
                <div>
                    <p>Content for option 3 with relevant information.</p>
                    <div className="mt-2 space-x-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">Link X</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded">Link Y</button>
                    </div>
                </div>
            )
        },
        {
            title: "Option 4",
            content: (
                <div>
                    <p>This is the content for option 4, with extra info.</p>
                    <div className="mt-2 space-x-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">Link Alpha</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded">Link Beta</button>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggleOption(index)}
                        className="w-full flex items-center justify-between px-4 py-2 text-left bg-blue-600 text-white rounded"
                    >
                        <span>{item.title}</span>
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: activeIndex === index ? 45 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-xl"
                        >
                            +
                        </motion.span>
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="overflow-hidden bg-gray-100 rounded px-4 py-2 mt-1"
                            >
                                {item.content}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
