import React from "react";
import "@/styles/heroSection.css";
import Header from "../header/header";
import Text from "../text/text";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="heroSection-main-div">
      <Header />
      <div className="flex justify-between container">
        <div>
          <div className="flex gap-[13px]">
            <Text size={56} fontWeight={800} color="#6B896E">
              Weight loss?
            </Text>
            <Text size={56} fontWeight={800}>
              we got you
            </Text>
          </div>
          <Text color="#010203B2" size={26} fontWeight={700}>
            Find treatments customized to your needs.
          </Text>
        </div>
        <div>
          <Image src="/images/heroSection.png" height={400} width={400} alt="hero section images"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
