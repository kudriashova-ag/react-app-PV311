import React, { useCallback, useState } from 'react';
import Count from './Count';
import IsFive from './IsFive';

const Counters = () => {
    console.log('Counters rendered');
    
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment = useCallback( () => {
        setCount1(count1 + 1);
    }, [count1]) 

    return (
        <div>
            <div>
                <button onClick={() => setCount1(count1 - 1)}>-</button>
                <Count value={count1} id="count1" increment={increment} />
                <button onClick={() => setCount1(count1 + 1)}>+</button>
            </div>

            <div>
                <button onClick={() => setCount2(count2 - 1)}>-</button>
                <Count value={count2} id="count2" />
                <button onClick={() => setCount2(count2 + 1)}>+</button>
            </div>
            <IsFive value={count2} />
        </div>
    );
}

export default Counters;
