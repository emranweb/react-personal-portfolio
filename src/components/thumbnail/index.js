import img from "../../assets/bg-image-02.jpg";
import ThumbnailStyle from "./thumbnail.style";

import React from "react";

export const Thumbnail = () => {
  return (
    <ThumbnailStyle>
      <img src={img} alt="person" />
    </ThumbnailStyle>
  );
};

export default Thumbnail;
