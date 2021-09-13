import React, { useState } from 'react';
import axios from 'axios';

import FlashCard from './flash-card/flash-card.component';

const FormComp = (props) => {
  const [data, setData] = useState({
    deckTitle: '',
    deckDescription: '',
    flashCards: [
      { frontTitle: '', backTitle: '' },
      { frontTitle: '', backTitle: '' },
    ],
  });

  const takeData = (e, elID) => {
    let updatedList = data.flashCards.map((el, id) => {
      if (id === elID) {
        return { ...el, [e.target.name]: e.target.value };
      }
      return el;
    });

    setData({ ...data, flashCards: updatedList });
  };

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // const x = await axios.post('https://localhost:8000/decks', data);
    // console.log(x.data.json);
    axios({
      method: 'post',
      url: 'https://localhost:8000/decks',
      data: data,
      headers: { 'content-type': 'application/json' },
    })
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        console.log(data);
      });
  };

  const addMoreCards = () => {
    setData({
      ...data,
      flashCards: [...data.flashCards, { frontTitle: '', backTitle: '' }],
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
