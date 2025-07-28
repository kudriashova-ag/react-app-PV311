import React from 'react';

const TodoFilter = ({ filter, setFilter, filtersObject }) => {
  const buttons = Object.keys(filtersObject); // ["Todo", "Done", "All"]
  
    return (
      <div>
        {buttons.map((button) => (
          <button key={button} onClick={() => setFilter(button)} style={ {backgroundColor: filter === button ? "dodgerblue" : "silver"} }>{button}</button>
        ))}
      </div>
    );
}

export default TodoFilter;
