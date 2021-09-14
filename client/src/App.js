import React from 'react';
import FormComp from './components/flash-card-form/form.component';
const App = () => {
  return (
    <div>
      <FormComp />
      <a href="/auth/google"></a>

      <a href="/auth/logout"></a>
    </div>
  );
};

export default App;
