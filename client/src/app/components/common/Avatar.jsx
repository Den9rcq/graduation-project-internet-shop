import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ url, size, alt }) => {
    return (
        <img
            src={url}
            className="rounded-circle"
            alt={alt}
            width={size}
            height={size}
        />
    )
}

Avatar.defaultProps = {
    url: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg',
    size: '65',
    alt: 'avatar'
}

Avatar.propTypes = {
    url: PropTypes.string,
    size: PropTypes.string,
    alt: PropTypes.string
}

export default Avatar
