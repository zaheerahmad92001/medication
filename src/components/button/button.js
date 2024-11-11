"use client";
import React from "react";

const Button= ({
  children,
  className,
  onClick,
  ...rest
}) => {

  return (
    <button
     onClick={onClick}
      className={`
        w-full p-2 text-base font-bold bg-black rounded-3xl text-black border border-[#0D0E0D]
        sm:w-[200px]
        md:w-[300px] 
        lg:w-[400px] 
        ${className}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
