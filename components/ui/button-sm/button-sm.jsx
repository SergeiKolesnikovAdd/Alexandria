import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-sm.style";
import { Text } from "components";

export const ButtonSM = ({ children, ...props }) => (
  <Button {...props}>
    <Text tag="span">{children}</Text>
  </Button>
);

ButtonSM.propTypes = {
  children: PropTypes.node.isRequired,

  ...propTypesMargin,
  ...propTypesPadding,
};
