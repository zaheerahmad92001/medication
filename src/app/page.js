import Accordion from "@/components/accordion/accordion";
import HeroSection from "@/components/heroSection/heroSection";
import ContentSlider from "@/components/iconSlider/ContentSlider";
import Text from "@/components/text/text";
import "@/styles/home.css";
import Image from "next/image";
import { skinData,accordionData , reviewSlider ,mentalHelthData } from "@/staticData/static-data";


const Home = () => {
  return (
    <>
      <HeroSection />
      
      <ContentSlider 
      data={mentalHelthData}
      title={'Mental Health '}
      />

    <ContentSlider 
      data={skinData}
      title={'Skin'}
      />



        <div key={Math.random()}  className="flex justify-center items-center bg-[#F5F6F5] py-[35px] mt-24">
          {reviewSlider.map((icon, index) => (
            <div key={index+Math.random()} className={`review-icons-inner-div flex justify-center ${index + 1 === accordionData.length ? '' : 'border-r border-[#CFDCD0]'}`}>
              <Image src={icon.icon} alt={icon.icon} width={100} height={50} />
            </div>
          ))}
        </div>
      {/* end ........review Slider */}



      {/* Have question? Get answers */}
      <div className="get-answers-section pt-10 pb-16 my-16">
        <div kay={Math.random()} className="mx-14 lg:mx-20">
          <div className="mb-10">
          <Text color={'text-black'} size={'text-2xl lg:text-5xl'} fontWeight={'font-bold'}>
            Have question? Get answers
          </Text>
          </div>
          {accordionData.map((data, index) => (
            <>
            <div className={`border-t border-[#CFDCD0] ${index + 1 === accordionData.length ? 'border-b border-[#CFDCD0]' : ''}`}>
              <Accordion data={data} />
            </div>
            </>
          ))}
        </div>
      </div>
      {/* end ............. Have question? Get answers */}

      
    </>
  );
};
export default Home;
