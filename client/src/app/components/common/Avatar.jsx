import React from 'react';

const Avatar = ({ url, size = '65', alt = 'avatar' }) => {
    return (
        <img
            src={url}
            className="rounded-circle"
            alt={alt}
            width={size}
            height={size}
        />
    );
};

export default Avatar;