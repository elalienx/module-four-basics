// Node module
import { FormEvent, useState } from "react";

export default function LoginForm() {
  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Methods
  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    const result: String = `${email} and ${password}`;

    event.preventDefault();
    alert(result);
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Minium 8"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="Login" />
    </form>
  );
}
