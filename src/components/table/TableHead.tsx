import { ReactNode } from "react";

function TableHead({ children }: { children: ReactNode }) {
  return (
    <thead>
        {children}
      
    </thead>
  );
}

export default TableHead;
