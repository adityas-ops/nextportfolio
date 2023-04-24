import { Global } from "@emotion/react";

const CustomScrollbarStyles = () => (
  <Global
    styles={`
      /* Remove scrollbar for webkit-based browsers */
      ::-webkit-scrollbar {
        display: none;
      }
    `}
  />
);

export default CustomScrollbarStyles;
