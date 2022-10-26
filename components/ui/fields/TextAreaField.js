import React from 'react';
import {PropTypes} from "prop-types";
import {Controller, useFormContext} from "react-hook-form";
import {TextArea} from "../text-area";
import { ErrorWrapper } from "../text-area/text-area.style";
import { Warning } from 'components';


export const TextAreaField = ({name, rules = null, ...props}) => {
    const {control, register, formState: {errors}} = useFormContext();

    return (
      <Controller
        control={control}
        name={name}
        rules={
          rules || {
            validate: (val) => !!val || "Поле заполнено неверно",
          }
        }
        render={({ field }) => (
            <TextArea
                {...register(rules && "message", {
              minLength: {
                value: 3,
                message: "Введите не менее 3 символов",
              },
              maxLength: {
                value: 255,
                message: "Введите не более 255 символов",
              },
            })}
            {...props}
            {...field}


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

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  normalizer: PropTypes.func,
};
