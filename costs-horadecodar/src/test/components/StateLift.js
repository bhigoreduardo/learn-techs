import { useState } from "react";

import Input from "./Input";
import Content from "./Content";

function StateLift() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <h2>StateLift</h2>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Insira seu email"
        handleOnChange={setEmail}
        value={email}
      />
      <Input
        id="phone"
        label="Phone"
        type="tel"
        placeholder="Insira seu telefone"
        handleOnChange={setPhone}
        value={phone}
      />
      <Content description="Email" content={email} handleOnClick={setEmail} />
      <Content description="Telefone" content={phone} handleOnClick={setPhone} />
    </div>
  );
}
export default StateLift;
