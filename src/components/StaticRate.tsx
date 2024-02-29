import { FaStar } from "react-icons/fa";

function StaticRate() {
  return (
    <div className="flex gap-2 text-gray-700 text-sm">
      {[...Array(5)].map((index) => {
        return  <FaStar key={index} />;
      })}
    </div>
  );
}

export default StaticRate;
