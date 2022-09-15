import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-xsm.style";
import { Caption } from "components";

export const ButtonXSM = ({ children, ...props }) => (
  <Button {...props}>
    <Caption tag="span">{children}</Caption>
  </Button>
);

ButtonXSM.propTypes = {
  ...propTypesMargin,
  ...propTypesPadding,
};
