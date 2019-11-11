import React from "react";
import Tweet from "./tweet"

function App() {
  return (
    <div className="app">
      < Tweet  name="Nick" message="Batman is best"/>
      < Tweet  name="Kim" message="99 Firemaking!"/>
      < Tweet name="Bobby" message="A clever message"/>
      < Tweet name="Andrea" message="A new Harry Potter is coming out!"/>
    </div>
  );
}

export default App;
