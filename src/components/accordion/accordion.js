import React from "react";
import Text from "../text/text";
import AddIcon from "@/icons/addIcon";
import '@/styles/accordion.css'

const Accordion = ({data}) => {
  // const [expand, setExpand] = useState(false)
  return (
    <div className="flex items-center justify-between mt-5 mb-5">
      <Text color={'text-black'} size={'text-sm lg:text-base'} fontWeight={'font-bold'} >{data.label}</Text>
      <div className="bg-[#0D0E0D] rounded-[40px]  h-[28px] lg:h-[32px]  w-[45px] lg:w-[52px] flex justify-center items-center">
        <AddIcon width={30} height={30} />
      </div>
    </div>
  );
};

export default Accordion;
