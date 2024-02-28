import { ReactNode } from "react";

function TableHeadElement({ children }: { children: ReactNode }) {
  return (
   
      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
        <p className="text-xs text-gray-500 uppercase font-semibold ">
          {children}
        </p>
      </th>
    
  );
}

export default TableHeadElement;
