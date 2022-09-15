import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-lg.style";
import { H3 } from "components";

export const ButtonLG = ({ children, ...props }) => (
  <Button {...props}>
    <H3 tag="span">{children}</H3>
  </Button>
);

ButtonLG.propTypes = {
  children: PropTypes.node.isRequired,

  ...propTypesMargin,
  ...propTypesPadding,
};
