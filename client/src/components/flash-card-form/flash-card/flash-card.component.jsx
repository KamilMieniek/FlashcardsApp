import React from "react";

const FlashCard = ({ front, back, takeData, id }) => {
  return (
    <div>
      <input
        name="frontTitle"
        type="text"
        value={front}
        onChange={(event) => takeData(event, id)}
        placeholder="Front"
      />
      <input
        name="backTitle"
        type="text"
        value={back}
        onChange={(event) => takeData(event, id)}
        placeholder="Back"
      />
    </div>
  );
};

export default FlashCard;
