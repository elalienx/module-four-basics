// Node modules
import { FormEvent, useState } from "react";

// Project files
import Card from "./components/Card";
import Countries from "./data/countries.json";
import Logo from "./assets/logo-spotifoo.png";
import "./styles/style.css";

export default function App() {
  // Local state
  const [greetings, setGreetings] = useState(Countries);
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Components
  const Cards = greetings.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      text={item.text}
      imageURL={item.imageURL}
    />
  ));

  // Methods
  function onExample(): void {
    setCounter(counter + 1);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    const result: String = `${email} and ${password}`;

    event.preventDefault();
    alert(result);
  }

  return (
    <div className="App">
      <p className="my-blue">Hello</p>
      <p className="my-blue">Hej hej</p>
      <img className="logo" src={Logo} />
      <h1>Welcome to Kickstart Frontend</h1>
      <p>
        <b>Counter:</b>
        {counter}
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        architecto modi magnam et necessitatibus in consequatur consectetur
        ipsum, illo iste eaque vel quis voluptas beatae aliquam minus laborum,
        veritatis sequi!
      </p>
      {Cards}
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
      <button onClick={onExample}>Increase counter</button>
    </div>
  );
}
