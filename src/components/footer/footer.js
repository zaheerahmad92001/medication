import React from "react";
import Text from "../text/text";
import Link from "next/link";
import TwitterIcon from "@/icons/twitterIcon";
import FacebookIcon from "@/icons/facebookIcon";
import LinkedInIcon from "@/icons/linkedInIcon";
import "@/styles/footer.css";
import Image from "next/image";

const footerLinkList = [
  {
    heading: "Learn",
    link: "/learn",
    list: [
      {
        label: "Sexual Health",
        src: "/learn/sexual-health",
      },
      {
        label: "Weight loss",
        src: "/learn/weight-loss",
      },
      {
        label: "Hair Loss",
        src: "/learn/hair-loss",
      },
      {
        label: "Mental Health",
        src: "/learn/mental-health",
      },
    ],
  },
  {
    heading: "Popular",
    link: "/popular",
    list: [
      {
        label: "Sildenafil",
        src: "/popular/sildenafil",
      },
      {
        label: "Generic for Viagra®",
        src: "/popular/generic-for-viagra®",
      },
      {
        label: "Cialis@",
        src: "/popular/cialis@",
      },
      {
        label: "Tadalafil@",
        src: "/popular/tadalafil@",
      },
      {
        label: "Generic for Cialis®",
        src: "/popular/generic-for-cialis®",
      },
      {
        label: "Minoxidil Solution",
        src: "/popular/minoxidil-solution",
      },
      {
        label: "Finasteride Pills",
        src: "/popular/finasteride-pills",
      },
      {
        label: "Topical Finasteride",
        src: "/popular/topical-finasteride",
      },
      {
        label: "Sertraline for PE",
        src: "/popular/sertraline-for-pe",
      },
      {
        label: "Sertraline",
        src: "/popular/Sertraline",
      },
      {
        label: "Generic for Zoloft®",
        src: "/popular/generic-for-zoloft®",
      },
      {
        label: "escitalopram",
        src: "/popular/escitalopram",
      },
      {
        label: "Generic for Lexapro®",
        src: "/popular/generic-for-lexapro®",
      },
    ],
  },
  {
    heading: "Hims",
    link: "/hims",
    list: [
      {
        label: "About Us",
        src: "/hims/about-us",
      },
      {
        label: "Good Health",
        src: "/hims/good-health",
      },
      {
        label: "How It Works",
        src: "/hims/how-it-works",
      },
      {
        label: "Medical Experts",
        src: "/hims/medical-experts",
      },
      {
        label: "Editorial Standards",
        src: "/hims/editorial-standards",
      },
      {
        label: "FAQs",
        src: "/hims/faqs",
      },
      {
        label: "Advocacy",
        src: "/hims/advocacy",
      },
      {
        label: "Investors",
        src: "/hims/investors",
      },
    ],
  },
  {
    heading: "Careers",
    link: "/careers",
    list: [
      {
        label: "Professionals",
        src: "/careers/professionals",
      },
      {
        label: "Providers",
        src: "/careers/providers",
      },
      {
        label: "How It Works",
        src: "/careers/how-it-works",
      },
    ],
  },
  {
    heading: "Connect",
    link: "/connect",
    list: [
      {
        label: "Customer Help Center",
        src: "/connect/customer-help-center",
      },
      {
        label: "Press Center",
        src: "/connect/press-center",
      }
    ],
  },
];

const lastFooterList = [
  {
    label: "Terms & conditions",
    src: "/terms-&-conditions",
  },
  {
    label: "Privacy policy",
    src: "/privacy-policy",
  },
  {
    label: "Sitemap",
    src: "/sitemap",
  },
  {
    label: "Telehealth Consent & Open Payments",
    src: "/telehealth-consent-&-open-payments",
  },
  {
    label: "Consumer Health Data Privacy Policy",
    src: "/consumer-health-data-privac-ypolicy",
  },
  {
    label: "Your privacy choices",
    src: "/your-privacy-choices",
  },
];
const Footer = () => {
  return (
    
    <div className="bg-[#0d0e0d] pt-[40px] md:pt-[100px] pb-[50px] px-5 lg:px-10">
  <div className="w-full mx-auto px-8">
    <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-8">
      
      <div className="flex flex-col gap-5">
        <Text color="text-white" size={"text-3xl lg:text-5xl"} fontWeight={'font-extrabold'}>
          For Men
        </Text>
        <div className="footer-main-div-inner-section-image max-w-[302px]">
          <Image
            src="/images/men.jpeg"
            alt="Men Image"
            width={302}
            height={342}
          />
        </div>
      </div>

      {
        footerLinkList.map((item, index) => (
          <div key={index} className="mt-4">
            {/* <Text size={24} fontWeight={700} color="white" >
              <Link href={item?.link}>{item.heading}</Link>
            </Text> */}
            <Text 
              size="text-xl" 
              fontWeight="font-bold" 
              color="text-white"
            >
            <Link href={item?.link}>{item.heading}</Link>
            </Text>

            <ol className="list-none pt-3">
              {
                item.list.map((listItem, listIndex) => (
                  <li key={listIndex} className={'py-0.5'}>
                    <Text size={"text-sm"} fontWeight={"font-normal"} color="text-white">
                      <Link href={listItem.src}>{listItem.label}</Link>
                    </Text>
                  </li>
                ))
              }
            </ol>
          </div>
        ))
      }
      
    </div>

    <div className="w-full border-t border-white my-5"></div>

    <div>
      <div className="flex flex-col lg:flex-row justify-between">
        
        <div>
          <ol className='flex flex-wrap gap-x-6 lg:gap-6 list-none p-0'>
            {lastFooterList?.map((item, index) => (
              <li className="inline text-white" key={index}>
                <Link href={item.src}>
                  <Text size={'text-base'} color="text-white">
                    {item?.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        
        <div className="flex gap-6 mt-4 lg:mt-0">
          <Link href="#">
            <TwitterIcon color="#fff" height="24" width="24" />
          </Link>
          <Link href="#">
            <FacebookIcon color="#fff" height="18.25" width="10.15" />
          </Link>
          <Link href="#">
            <LinkedInIcon color="#fff" height="16.8" width="16" />
          </Link>
        </div>
        
      </div>

      <div className="mt-4">
        <Text color={'text-white'} size={'text-sm'}>
          &copy; 2024 <Link href="#">Hims & Hers Health</Link>, Inc. All rights
          reserved. HIMS, HERS, H, and HIMS & HERS are trademarks of Hims, Inc.
        </Text>
      </div>
    </div>
  </div>
</div>

  );
};

export default Footer;
