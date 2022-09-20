import {
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-md.style";
import { Text } from "components";

export const ButtonMD = ({ children, ...props }) => (
  <Button {...props}>
    <Text tag="span">{children}</Text>
  </Button>
);

ButtonMD.propTypes = {
  children: PropTypes.node.isRequired,

  ...propTypesMargin,
  ...propTypesPadding,
};
