import React from 'react';
import { useField } from "formik";

const Select = ({label, children, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <select {...props} {...field}>
                {children}
            </select>
            {meta.touched && meta.error && <span className="helper-text" data-error={meta.error}/>}
        </>
    );
};

export default Select;