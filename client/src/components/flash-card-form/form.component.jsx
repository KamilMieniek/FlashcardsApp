import React, { useState, useEffect } from "react";
import axios from "axios";

import FlashCard from "./flash-card/flash-card.component";

const FormComp = (props) => {
  const [data, setData] = useState({
    deckTitle: "",
    deckDescription: "",
    flashCards: [
      { frontTitle: "", backTitle: "" },
      { frontTitle: "", backTitle: "" },
    ],
  });

  const takeData = (e, elID) => {
    let updatedList = data.flashCards.map((el, id) => {
      if (id == elID) {
        return { ...el, [e.target.name]: e.target.value };
      }
      return el;
    });

    setData({ ...data, flashCards: updatedList });
  };

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/decks",
      data: data,
    });
  };

  const addMoreCards = () => {
    setData({
      ...data,
      flashCards: [...data.flashCards, { frontTitle: "", backTitle: "" }],
    });
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Moj zestaw</h3>
        <input
          name="deckTitle"
          onChange={handleOnChange}
          type="text"
          value={data.deckTitle}
          placeholder="Nazwa zestawu"
        />
        <input
          name="deckDescription"
          type="text"
          onChange={handleOnChange}
          value={data.deckDescription}
          placeholder="Opis zestawu"
        />
        {data.flashCards.length === 0
          ? null
          : data.flashCards.map((el, id) => {
              console.log(id, "map id");
              return (
                <FlashCard
                  key={id}
                  front={data.flashCards[id].frontTitle}
                  back={data.flashCards[id].backTitle}
                  id={id}
                  takeData={takeData}
                />
              );
            })}

        <input type="submit" value="Wyślij" />
      </form>
      <button onClick={addMoreCards}>More Cards</button>
    </div>
  );
};

export default FormComp;
