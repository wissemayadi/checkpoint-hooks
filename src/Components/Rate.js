
import React from "react";

const Rate = ({ rating,setSearchRate }) => {
  let Stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      Stars.push(
        <span 
        className="rating" 
        style={{ cursor: "pointer" }}
        onClick={()=>setSearchRate(i + 1)}
        
        >
          ★
        </span>
      );
    } else {
      Stars.push(
        <span 
        className="rating" 
        style={{ cursor: "pointer" }}
        onClick={() => setSearchRate(i + 1)}
         >
          ☆
        </span>
      );
    }
  }

  return Stars;
};

export default Rate;
