import { ReactNode } from "react";

function MobileCarElementContainer({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">{children}</div>;
}

export default MobileCarElementContainer;
