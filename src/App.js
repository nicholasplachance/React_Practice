import React, { useState } from "react";
import Tweet from "./tweet";
import Header from "./Header";

function App() {
  const [users, setUsers] = useState([
    { name: "Nick", message: "Batman is best!" },
    { name: "Kim", message: "99 Firemaking W00T" },
    { name: "Bobby", message: "A clever message." },
    { name: "Andrea", message: "A new Harry Potter is coming out!" }
  ]);

  let [isRed, setRed] = useState(false);
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const reset = () => {
    setCount(count = 0)
    setRed(isRed = false)
  }

  return (
    <React.Fragment>
      <Header />

      <div className="app">
        <div>
          <h2 className={isRed ? "red" : ""}>Change My Color!</h2>
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
          <h1>{count}</h1>
        </div>
        <div>
          {users.map(user => (
            <Tweet name={user.name} message={user.message} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
