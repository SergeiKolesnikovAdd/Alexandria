import React, { useState } from 'react';
import { PropTypes } from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from 'components';



export const CheckboxField = ({ name, rules = null, normalizer, ...props }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules || { validate: (val) => !!val || 'Необходимо согласие на обработку данных' }}
            render={({field}) => (
                <Checkbox {...props}  {...field}  error={errors?.[name]?.message}/>
                
            )}
        />
    );
}

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    normalizer: PropTypes.func,
}
