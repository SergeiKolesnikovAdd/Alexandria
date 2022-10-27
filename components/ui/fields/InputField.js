import React from "react";
import { PropTypes } from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../input";
import { Warning } from "components";
import { ErrorWrapper } from "../input/input.style";

export const InputField = ({ name, rules = null, normalizer, ...props }) => {
  const {
    control,
    formState: { errors },
    register,
    trigger,
  } = useFormContext();

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
          {...register("email", {
            required: "Поле заполнено неверно",
            maxLength: {
              value: 255,
              message: "Введите не более 255 символов",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Пожалуйста введите корретный адрес",
            },
          })}
          {...register("name", {
            required: "Поле заполнено неверно",
            maxLength: {
              value: 255,
              message: "Введите не более 255 символов",
            },
          })}
          {...props}
          {...other}
          onChange={(event) => {
            const { value } = event.target;
            if (errors.name) {
              trigger("name");
            }
            if (errors.email) {
              trigger("email");
            }
            if (normalizer) {
              event.target.value = normalizer(value);
              onChange(value);
            } else {
              onChange(value);
            }
          }}
          error={
            errors?.[name]?.message && (
              <ErrorWrapper>
                <Warning />
                {errors?.[name]?.message}
              </ErrorWrapper>
            )
          }
        />
      )}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  normalizer: PropTypes.func,
};
