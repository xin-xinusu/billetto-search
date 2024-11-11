import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h4 className="text-lg font-semibold">FAQ</h4>
      <button
        className="flex justify-between w-full mt-2"
        onClick={() => setExpanded(!expanded)}
      >
        
      </button>
    </div>
  );
};

export default FAQ;
