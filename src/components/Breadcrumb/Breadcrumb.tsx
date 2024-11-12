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
        <li className="hover:underline cursor-pointer">
          <div className="flex items-center gap-4">
            <svg fill="#ffffff" width="14px" height="14px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>slash</title> <path d="M3.625 27.094l9.563-26.688h2.406l-9.563 26.688h-2.406z"></path> </g></svg>
            <div className="text-white focus:ring">{category}</div>
          </div>
        </li>
        <li className="hover:underline cursor-pointer">
          <div className="flex items-center gap-4">
            <svg fill="#ffffff" width="14px" height="14px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>slash</title> <path d="M3.625 27.094l9.563-26.688h2.406l-9.563 26.688h-2.406z"></path> </g></svg>
            <div className="text-white focus:ring">{subcategory}</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
