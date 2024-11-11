// import React from "react";

// const Text = ({
//   color,
//   border,
//   size,
//   isUppercase,
//   backgroundColor,
//   borderRadius,
//   isTitle,
//   isSectionTitle,
//   isBold,
//   isSemibold,
//   fontWeight,
//   children,
//   rest,
//   className,
//   style
// }) => {
//   const textStyle = {
//     color,
//     borderRadius: borderRadius ? borderRadius : "0",
//     fontSize: size ? `${size}px` : "16px",
//     fontWeight: fontWeight ? fontWeight : isBold ? "700" : isSemibold ? "400" : "normal",
//     textTransform: isUppercase ? "uppercase" : "none",
//     backgroundColor: backgroundColor ? backgroundColor : "transparent",
//     ...style,
//   };
//   return (
//     <>
//       <div className={className} style={{ ...textStyle }} {...rest}>
//         {children}
//       </div>
//     </>
//   );
// };

// export default Text;

import React from 'react';

const Text = ({
  size = 'text-base', // Default size
  fontWeight = 'font-normal', // Default font weight
  color = 'text-black', // Default color
  children,
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <div
      className={`${size} ${fontWeight} ${color} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Text;