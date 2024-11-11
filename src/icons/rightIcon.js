import React from "react";

const RightIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : "7"}
      height={props?.height ? props?.height : "12"}
      viewBox="0 0 7 12"
      fill="none"
    >
      <path
        d="M0.750061 0.75L6.00006 6L0.750063 11.25"
        stroke={props?.color ? props?.color : "white"}
        strokeWidth="1.3634"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightIcon;
