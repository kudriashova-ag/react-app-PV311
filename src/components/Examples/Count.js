import React, { memo } from 'react';

const Count = ({ value, id }) => {
    console.log(`Count ${id} rendered`);
    
    return (
        <span>
            {value}
        </span>
    );
}

export default memo(Count);
