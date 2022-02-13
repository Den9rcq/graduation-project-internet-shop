import React from 'react';
import { useField } from "formik";

const TextInput = ({ label, icon, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <i className="material-icons prefix">{icon}</i>
            <label>{label}</label>
            {
                props.as === "textarea"
                    ? <textarea {...props} {...field} />
                    : <input className="validate" {...props} {...field} />
            }
            {meta.touched && meta.error && <span className="helper-text" data-error={meta.error}>{meta.error}</span>}
        </>
    );
};

export default TextInput;