import React from 'react';
import { PropTypes } from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../input";
import { Warning } from 'components';

export const InputField = ({ name, rules = null, normalizer, ...props }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={
        rules || {
          validate: (val) => !!val || "Поле заполнено неверно",
        }
      }
      render={({ field: { onChange, ...other } }) => (
        <Input
          {...props}
          {...other}
          onChange={(event) => {
            const { value } = event.target;

            if (normalizer) {
              event.target.value = normalizer(value);
              onChange(value);
            } else {
              onChange(value);
            }
          }}
          error={  <span style={{paddingTop:"15px"}}><Warning/>  `{errors?.[name]?.message}` </span>}
        />
      )}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  normalizer: PropTypes.func,
}
