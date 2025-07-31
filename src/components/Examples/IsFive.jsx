import React, { useMemo } from 'react';

const IsFive = ({ value }) => {


    console.log('IsFive rendered');

    const getResult = () => {
        let i = 0;
        while(i<1000000000){
            i++
        }
        return value === 5 ? 'Is 5' : 'Is not 5'
    }

    const result = useMemo( getResult, [value] );

    return (
        <div>
           {result} 
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => { 

    // false - рендериться за замовчуванням
    // true - не рендериться
    //console.log(prevProps, nextProps);
    
    return nextProps.value !== 5 && prevProps.value !== 5
});
