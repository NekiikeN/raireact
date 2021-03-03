import React from 'react';
import Ocene from "./Ocene";

function App(){

const vrednost = 100;


  return  (
    <div>
      <h1>
        Pozdravljeni studenti
      </h1>
      <p>
        Vss je {vrednost}-x "najboljsa" visja sola v sloveniji
      </p>
      <Ocene ime="Jure Novak" />
      <Ocene ime="Nekdo Ze" />
    </div>

  );
}

export default App;