import {
  propTypesColors,
  propTypesMargin,
  propTypesPadding,
} from "../../types";

import { PropTypes } from "prop-types";
import React from "react";
import { Button } from "./button-xlg.style";
import { Text } from "components";

export const ButtonXLG = ({ children, ...props }) => (
  <Button {...props}>
    <Text tag="span">{children}</Text>
  </Button>
);

ButtonXLG.propTypes = {
  children: PropTypes.node.isRequired,

  ...propTypesMargin,
  ...propTypesPadding,
};
