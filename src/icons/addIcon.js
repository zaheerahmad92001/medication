import React from "react";

const AddIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : "45"}
      height={props?.height ? props?.height : "45"}
      viewBox="0 0 45 45"
      fill="none"
    >
      <path
        d="M11.25 22.5H33.75"
        stroke={props?.color ? props?.color : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 11.25L22.5 33.75"
        stroke={props?.color ? props?.color : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddIcon;
