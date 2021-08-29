import React from "react";
import { FaDesktop } from "react-icons/fa";
import { H4, P } from "../typography";
import MediaStyle from "./media.style";

const Media = () => {
  return (
    <MediaStyle>
      <FaDesktop></FaDesktop>
      <div>
        <H4>Web Development</H4>
        <P>
          Web design is a similar process of creation, with the intention of
          presenting...
        </P>
      </div>
    </MediaStyle>
  );
};

export default Media;
