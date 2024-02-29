import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import StaticRate from "../StaticRate";
import Badge from "../Badge/Badge";
import { themeCollors } from "@/app/types/ThemeColors";
import { FaCheck } from "react-icons/fa";

type PropTypes = {
  img: string;
  date: string;
  title: string;
};

function MobileCarListElement({ date, img, title }: PropTypes) {
  return (
    <div className="flex gap-5 pt-2 pb-2 border max-w-[380px] w-full">
      <div className="relative">
        <Image
          src={img}
          alt="imagem de um mini cooper"
          width={120}
          height={120}
        
        ></Image>
        <div className="absolute top-0 left-0">
          <Badge
            theme={themeCollors.Green600}
            ico={<FaCheck />}
            type="circle"
            textColor="text-white"
          />
        </div>
      </div>
      <div className="flex justify-between  w-full">
        <div className="space-y-3">
          <h5 className="text-base font-semibold text-gray-900 ">{title}</h5>
          <p className="text-gray-500 text-xs font-normal">Next reservation: {date}</p>
          <StaticRate />
        </div>

        <div>
          <HiDotsVertical />
        </div>
      </div>
    </div>
  );
}

export default MobileCarListElement;
