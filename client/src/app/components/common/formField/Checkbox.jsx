import React from 'react';
import { useField } from "formik";

const Checkbox =({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" })
    return (
        <>
            <label className="checkbox">
                <input {...props} {...field} type="checkbox"/>
                {children}
            </label>
            {meta.touched && meta.error && <span className="helper-text" data-error={meta.error}/>}
        </>
    );
};

export default Checkbox;