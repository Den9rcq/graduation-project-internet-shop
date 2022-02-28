import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <>
            <label className="checkbox">
                <input {...props} {...field} type="checkbox"/>
                {children}
            </label>
            {meta.touched && meta.error && <span className="helper-text" data-error={meta.error}/>}
        </>
    )
}

Checkbox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Checkbox
