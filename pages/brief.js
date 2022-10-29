import {
 
} from "components";

import { useState } from "react";
import React from "react";
import { NewsSlide } from "components";
import { BriefFirstSlide } from "components";

const Brief = () => {
  const [isColored, setColored] = useState(false);
  return (
    <>
      <BriefFirstSlide/>
    </>
  );
};

export default Brief;
