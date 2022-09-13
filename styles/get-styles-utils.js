import {
  fontSizes,
  namesOfBreakpoints,
  offsets,
  sizes,
  subsequenceOfBreakpoints,
} from "./constants";

import { getCurrentColor } from "./get-value-utils";
import { getResponsiveStyle } from "./media-query-utils";

export const getCurrentDictionaryValue = (dictionary, breakpointName, type) =>
  dictionary?.[breakpointName]?.[type];

export const getCurrentStyleByDictionary =
  (dictionary) => (propertyName) => (type) =>
    getResponsiveStyle(propertyName)(
      subsequenceOfBreakpoints.map((breakpointName) =>
        getCurrentDictionaryValue(dictionary, breakpointName, type)
      )
    );

const getCurrentOffsetStyle = getCurrentStyleByDictionary(offsets);

const getCurrentStylesByDirection = (styleName) => (direction, type) => {
  switch (direction) {
    case "top":
      return getCurrentOffsetStyle(styleName + "Top")(type);
    case "bottom":
      return getCurrentOffsetStyle(styleName + "Bottom")(type);
    case "left":
      return getCurrentOffsetStyle(styleName + "Left")(type);
    case "right":
      return getCurrentOffsetStyle(styleName + "Right")(type);
    case "vertical":
      return [
        getCurrentOffsetStyle(styleName + "Top")(type),
        getCurrentOffsetStyle(styleName + "Bottom")(type),
      ];
    case "horizontal":
      return [
        getCurrentOffsetStyle(styleName + "Left")(type),
        getCurrentOffsetStyle(styleName + "Right")(type),
      ];
    default:
      return getCurrentOffsetStyle(styleName)(type);
  }
};

export const getCurrentColorStyles = (color) =>
  `color: ${getCurrentColor(color)};`;

export const getCurrentBackgroundColorStyles = (color) =>
  `background-color: ${getCurrentColor(color)};`;

export const getCurrentFontSizeStyle = (type) =>
  getCurrentStyleByDictionary(fontSizes)("fontSize")(type);

export const getCurrentMarginStyle = (direction, type) =>
  getCurrentStylesByDirection("margin")(direction, type);

export const getCurrentPaddingStyle = (direction, type) =>
  getCurrentStylesByDirection("padding")(direction, type);

export const getVW = (px, baseWidth = 1600) =>
    `${px / baseWidth * 100}vw`

const { count: countDesktopLG, x1: x1DesktopLG } =
  sizes[namesOfBreakpoints.desktopLG];

export const getCurrentSizeStyle = getCurrentStyleByDictionary(sizes);

export const getCurrentWidthSizeStyle = getCurrentSizeStyle("width");

export const getCurrentHeightSizeStyle = getCurrentSizeStyle("height");
