import React from "react";

const LinkedInIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : "16"}
      height={props?.height ? props?.height : "17"}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M1.81333 0.000488281C0.811857 0.000488281 0 0.830796 0 1.85503C0 2.87927 0.811857 3.70958 1.81333 3.70958C2.81481 3.70958 3.62667 2.87927 3.62667 1.85503C3.62667 0.830796 2.81481 0.000488281 1.81333 0.000488281Z"
        fill={props?.color ? props?.color : "url(#paint0_linear_4009_287)"}
      />
      <path
        d="M0.106667 5.23685C0.0477563 5.23685 0 5.28569 0 5.34594V16.6914C0 16.7516 0.0477563 16.8005 0.106667 16.8005H3.52C3.57891 16.8005 3.62667 16.7516 3.62667 16.6914V5.34594C3.62667 5.28569 3.57891 5.23685 3.52 5.23685H0.106667Z"
        fill={props?.color ? props?.color : "url(#paint1_linear_4009_287)"}
      />
      <path
        d="M5.65333 5.23685C5.59442 5.23685 5.54667 5.28569 5.54667 5.34594V16.6914C5.54667 16.7516 5.59442 16.8005 5.65333 16.8005H9.06667C9.12558 16.8005 9.17333 16.7516 9.17333 16.6914V10.5823C9.17333 10.1483 9.3419 9.7321 9.64196 9.42522C9.94202 9.11834 10.349 8.94594 10.7733 8.94594C11.1977 8.94594 11.6046 9.11834 11.9047 9.42522C12.2048 9.7321 12.3733 10.1483 12.3733 10.5823V16.6914C12.3733 16.7516 12.4211 16.8005 12.48 16.8005H15.8933C15.9522 16.8005 16 16.7516 16 16.6914V9.16871C16 7.05082 14.1989 5.39394 12.1385 5.58551C11.5031 5.64458 10.8748 5.80614 10.2882 6.06328L9.17333 6.55193V5.34594C9.17333 5.28569 9.12558 5.23685 9.06667 5.23685H5.65333Z"
        fill={props?.color ? props?.color : "url(#paint2_linear_4009_287)"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4009_287"
          x1="4.04301"
          y1="16.8005"
          x2="11.3093"
          y2="1.8287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props?.color ? props?.color : "#FCEEE5"} />
          <stop offset="1" stopColor={props?.color ? props?.color : "#DFF4FB"} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4009_287"
          x1="4.04301"
          y1="16.8005"
          x2="11.3093"
          y2="1.8287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props?.color ? props?.color : "#FCEEE5"} />
          <stop offset="1" stopColor={props?.color ? props?.color : "#DFF4FB"} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4009_287"
          x1="4.04301"
          y1="16.8005"
          x2="11.3093"
          y2="1.8287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props?.color ? props?.color : "#FCEEE5"} />
          <stop offset="1" stopColor={props?.color ? props?.color : "#DFF4FB"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LinkedInIcon;
