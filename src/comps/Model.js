import React from 'react';

const Model = ({ selectedImg }) => {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Model;