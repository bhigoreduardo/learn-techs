import { useState } from "react";

function Events() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function namedFunction() {
    console.log("Clicked named function");
  }
  const arrowFunction = () => console.log("Clicked arrow function");
  const sendName = (e) => {
    e.preventDefault();
    console.log(`Send Name: ${name} Password: ${password}`);
  };

  return (
    <div>
      <h2>Events</h2>
      <button onClick={namedFunction}>Click Named</button>
      <button onClick={arrowFunction}>Click Arrow</button>
      <form onSubmit={sendName}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="Digite seu name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          placeholder="Insira sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Events;
