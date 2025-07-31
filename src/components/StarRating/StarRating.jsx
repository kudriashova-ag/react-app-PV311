import React, { useState } from "react";

const StarRating = ({ rate, handleRatingTask, id }) => {
  console.log('StarRating rendered');
  
  const [rating, setRating] = useState(rate);

  const handleClick = (index) => {
    setRating(index + 1 === rating ? 0 : index + 1); 
    handleRatingTask(id, index + 1 === rating ? 0 : index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          style={{ color: i < rating ? "gold" : "gray", cursor: "pointer" }}
          onClick={() => handleClick(i)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default React.memo(StarRating);
