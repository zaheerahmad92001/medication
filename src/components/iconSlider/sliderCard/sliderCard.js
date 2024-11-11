import Button from "@/components/button/button";
import Text from "@/components/text/text";
import Image from "next/image";
import React from "react";

const SliderCard = ({ text, img, imgAlt, btnText, btnText2 }) => {
  return (
    <div
      style={{ background:"linear-gradient(54.54deg, rgba(243, 223, 194, 0.3) 1.53%, rgba(171, 236, 214, 0.3) 95.71%)",}}
      className="flex flex-col h-[500px] w-full  justify-between items-center p-[20px] rounded-[30px]"
    >
      <div className="w-full">
        <Text color={"text-black"} size={"text-lg"} fontWeight="font-bold">
          {text}
        </Text>
      </div>
      <div className={`relative w-full h-[340px]`}>
        <Image
          src={img}
          alt={imgAlt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={`flex justify-center gap-2`} style={{ width: "100%" }}>
        <Button className={"text-white"} onClick={() => alert("call")}>
          {btnText}
        </Button>

        {btnText2 && (
          <Button className="bg-transparent" onClick={() => {}}>
            {btnText2}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SliderCard;
