import React from "react";

interface BreadcrumbProps {
  category: string;
  subcategory: string;
  type: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, subcategory, type }) => {
  return (
    <nav className="text-gray-500 text-sm mb-4">
      <ul className="flex items-center space-x-2">
        <li className="hover:underline cursor-pointer">{type}</li>
        <li>/</li>
        <li className="hover:underline cursor-pointer">{category}</li>
        <li>/</li>
        <li className="font-semibold">{subcategory}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
