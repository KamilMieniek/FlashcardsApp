import React from 'react';

const FormComp = (props) => {
  const divs = [
    <label>
      Title:
      <input type="text" name="title" />
    </label>,
    <label>
      Description:
      <input type="text" name="description" />
    </label>,
    <div>
      <label>
        Title:
        <input type="text" name="front" />
      </label>
      <label>
        Title:
        <input type="text" name="back" />
      </label>
    </div>,
  ];
  return (
    <div>
      {/* <h2>Props Children how to it?</h2>
      {props.children} */}

      <form onSubmit={() => {}}>
        {divs.map((item) => {
          return item;
        })}

        <input type="submit" value="Wyślij" />
      </form>
      <button onClick={(params) => {}}>More Cards</button>
    </div>
  );
};

export default FormComp;
