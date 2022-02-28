import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const Select = ({ label, children, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <select {...props} {...field}>
                {children}
            </select>
            {meta.touched && meta.error && <span className="helper-text" data-error={meta.error}/>}
        </>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Select
