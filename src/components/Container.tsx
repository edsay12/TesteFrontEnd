import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="w-full h-full max-w-[1440px] p-10 mx-auto">{children}</div>;
}

export default Container;
