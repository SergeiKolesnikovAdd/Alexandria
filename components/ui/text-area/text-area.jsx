import { PropTypes } from "prop-types";
import {
  Error,
  InputWrapper,
  TextAreaInput,
  TextAreaWrapper,
  Title,
} from "./text-area.style";
import { propTypesMargin, propTypesPadding } from "../../types";

export const TextArea = ({
  title,
  error,
  value = "",
  onChange,
  defaultValue,
  rows = 1,
  maxLength = 255,
  propsInput,
  isFullWidth = false,
  isResizable = true,
  ...props
}) => {
  function resizeHeight(e) {
    e.target.style.height = "auto";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;
  }

  function handleKeyUp(e) {
    isResizable && resizeHeight(e);
    const value = e.target.value;
    console.log(value);
    if (value.length > maxLength) return;
    onChange?.(value);
  }

  return (
    <InputWrapper isFullWidth={isFullWidth} {...props}>
      <TextAreaWrapper isError={error} isActive={!!value} maxRows={rows}>
        <TextAreaInput
          placeholder=""
          onChange={handleKeyUp}
          defaultValue={defaultValue}
          maxLength={maxLength}
          value={value}
          rows={rows}
          {...propsInput}
        />
        {error && <Error>{error}</Error>}
      </TextAreaWrapper>
    </InputWrapper>
  );
};

TextArea.propTypes = {
  isResizable: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  defaultValue: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ...propTypesMargin,
  ...propTypesPadding,
};
