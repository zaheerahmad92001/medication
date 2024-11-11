import React from "react";

const FacebookIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : "12"}
      height={props?.height ? props?.height : "20"}
      viewBox="0 0 12 20"
      fill="none"
    >
      <path
        d="M8.2 0.875488C6.97337 0.875488 5.79699 1.36276 4.92963 2.23012C4.06228 3.09748 3.575 4.27386 3.575 5.50049V8.07549H1.1C0.975736 8.07549 0.875 8.17622 0.875 8.30049V11.7005C0.875 11.8248 0.975736 11.9255 1.1 11.9255H3.575V18.9005C3.575 19.0248 3.67574 19.1255 3.8 19.1255H7.2C7.32426 19.1255 7.425 19.0248 7.425 18.9005V11.9255H9.92192C10.0252 11.9255 10.1152 11.8552 10.1402 11.7551L10.9902 8.35506C11.0257 8.21305 10.9183 8.07549 10.7719 8.07549H7.425V5.50049C7.425 5.29495 7.50665 5.09782 7.65199 4.95248C7.79733 4.80714 7.99446 4.72549 8.2 4.72549H10.8C10.9243 4.72549 11.025 4.62475 11.025 4.50049V1.10049C11.025 0.976224 10.9243 0.875488 10.8 0.875488H8.2Z"
        fill={props?.color ? props?.color : "url(#paint0_linear_4009_285)"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4009_285"
          x1="3.43978"
          y1="19.1255"
          x2="13.3177"
          y2="7.23997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props?.color ? props?.color : "#FCEEE5"} />
          <stop
            offset="1"
            stopColor={props?.color ? props?.color : "#DFF4FB"}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
