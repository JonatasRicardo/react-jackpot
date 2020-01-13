import React from 'react';
import Jackpot from './Jackpot';

function App() {
  return (
    <div className="App">
      <Jackpot
        text="JACKPOT"
        durationInSeconds={5}
        itemHeight={140}
        itemWidth={80}
      />
    </div>
  );
}

export default App;
