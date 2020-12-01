import React from 'react';

const NewImage = ({ src, alt }) => {
    return (
        <figure>
            <img
                src={src}
                width="480"
                height="480"
                alt={alt}
            />
        </figure>
    )
}

export default NewImage;