import React from "react";
import SectionStyled from "./section.style";

export const Section = ({ padding, children }) => {
  return (
    <SectionStyled padding={padding ? padding.split(" ") : ""}>
      {children}
    </SectionStyled>
  );
};

export default Section;
