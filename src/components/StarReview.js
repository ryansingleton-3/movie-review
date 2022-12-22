import React, { useState } from "react";
import ReactStars from "./images/react-stars";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating text-center">
      {[...Array(1)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
              marginBottom: "2%",
            }}
          >
            <span className="star">
              <ReactStars size={50} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
