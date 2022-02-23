import React from 'react';

const Avatar = ({ url, size = '65', alt = 'avatar' }) => {
    return (
        <img
            src={url || 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'}
            className="rounded-circle"
            alt={alt}
            width={size}
            height={size}
        />
    );
};

export default Avatar;