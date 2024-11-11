import React from "react";

interface BreadcrumbProps {
  category: string;
  subcategory: string;
  type: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, subcategory, type }) => {
  return (
    <nav className="hidden lg:flex pb-4">
      <ul className="flex text-sm items-center space-x-4 list-none m-0 p-0">
        <li className="hover:underline cursor-pointer"><div className="text-white focus:ring">{type}</div></li>
        <li>/</li>
        <li className="hover:underline cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="text-white focus:ring">{category}</div>
          </div>
        </li>
        <li>/</li>
        <li className="hover:underline cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="text-white focus:ring">{subcategory}</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
