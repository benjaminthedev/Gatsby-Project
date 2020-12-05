import React from 'react';

const NewImage = ({ src, alt }) => {
    return (
        <figure>
            <img
                src={src}
                width="460"
                height="460"
                alt={alt}
            />
        </figure>
    )
}

export default NewImage;