import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { DropDown } from "../drop-down";
import { ErrorWrapper } from "../drop-down/drop-down.style";
import { Warning } from "components";

export const DropDownField = ({
  name,
  rules = null,
  multiple = false,
  ...props
}) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();
  const [currentOption, setCurrentOption] = useState(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules || { validate: (val) => !!val || "Поле заполнено неверно" }}
      render={({ field: { onChange, value, onBlur, ...other } }) => (
        <DropDown
              {...props}
              multiple={multiple}
              {...other}
              value={currentOption}
              error={
                  errors?.[name]?.message && (
                      <ErrorWrapper>
                          <Warning />
                          {errors?.[name]?.message}
                      </ErrorWrapper>
                  )
              }
              onChange={(option) => {
                  if (errors.message) {
                      trigger("message");
                  }
                  if (multiple) {
                      onChange(option.map(({ value }) => value));
                  } else {
                      onChange(option.value);
                  }
                  setCurrentOption(option);
                  onBlur(false)
              }

              }
              
        />
      )}
    />
  );
};

DropDownField.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  multiple: PropTypes.bool,
};
