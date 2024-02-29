import { themeCollors } from "@/app/types/ThemeColors";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

type PropTypes = {
  text: string;
  type?: "basic" | "circle" | "only-icon";
  size?: "small" | "large";
  theme?: themeCollors; // imprementar depois
  ico?: ReactNode;
  isRemoveButton?: boolean;
};

function Badge({
  ico,
  isRemoveButton,
  size = "small",
  text,
  theme: bgColor,
  type = "basic",
}: PropTypes) {
  if (type === "only-icon") {
    if (ico) {
      return (
        <div
          className={`${bgColor} ${size === "large" ? "p-2" : "p-1"} 
          
          text-xs font-medium  inline-block bg-contain   rounded-full`}
        >
          {ico}
        </div>
      );
    }
  }

  if (type === "circle") {
    if (ico) {
      return (
        <div
          className={`${bgColor} ${size === "large" ? "p-2" : "p-1"} 
          
          text-xs font-medium  inline-block bg-contain   rounded-full`}
        >
          {ico}
        </div>
      );
    }
  }

  return (
    <div
      className={`${bgColor} ${
        size === "large" ? "p-2" : "p-1"
      } text-xs font-medium  inline-block bg-contain  rounded-md `}
    >
      <div className="flex items-center justify-between gap-2">
        {ico && ico}
        <div>{text}</div>

        {isRemoveButton && (
          <span className="ml-2 inline ">
            <IoMdClose />
          </span>
        )}
        {}
      </div>
    </div>
  );
}

export default Badge;
