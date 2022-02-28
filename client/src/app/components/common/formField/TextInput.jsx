import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const TextInput = ({ label, icon, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <i className="material-icons prefix">{icon}</i>
            {!field.value && <label>{label}</label>}
            {
                props.as === 'textarea'
                    ? <textarea {...props} {...field} />
                    : <input {...props} {...field} />
            }
            {meta.touched && meta.error ? <span className="helper-text" data-error={meta.error}>{meta.error}</span> : null}
        </>
    )
}

TextInput.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    as: PropTypes.string
}

export default TextInput
