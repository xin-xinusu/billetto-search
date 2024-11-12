import React, { useState, useRef } from 'react';

interface AccordianProps {
  title: string;
  children: React.ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:col-span-2">
      <div className="mt-4 sm:rounded-lg bg-gray-800 p-4 lg:p-6 group">
        {/* Summary Section */}
        <div
          className="cursor-pointer relative w-full flex justify-between items-center text-left"
          onClick={handleToggle}
        >
          <h2 className="text-white group-hover:text-gray-300 font-bold leading-4 m-0">
            {title}
          </h2>

          <span className="ml-6 flex items-center">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            )}
          </span>
        </div>

        {/* Animated Content Section */}
        <div
          ref={contentRef}
          className={`transition-all duration-100 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0'
          }`}
          style={{
            height: isOpen ? contentRef.current?.scrollHeight : 0, // Smooth height transition
          }}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
