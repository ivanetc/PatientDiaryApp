import React from 'react';

const FreeForm = ({label, name}) => {

    return (
        <div>
            <label>
                {label}
                <input
                    type="textarea"
                    name={name}
                />
            </label>
        </div>);
}

export default FreeForm;