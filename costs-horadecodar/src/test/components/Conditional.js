import { useState } from "react";

function Conditional() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Conditional</h2>
      <input type="text" value={name} placeholder="Insira seu nome" onChange={(e) => setName(e.target.value)} />
      {name ? (
        <>
          <p>Name: {name}</p>
          <button onClick={() => setName("")}>Clear name</button>
        </>
      ) : (
        <p>No content</p>
      )}
    </div>
  );
}
export default Conditional;
