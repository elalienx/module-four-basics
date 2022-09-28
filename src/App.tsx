// Node modules
import { useState } from "react";

// Project files
import Card from "./components/Card";
import Countries from "./data/countries.json";
import Logo from "./assets/logo-spotifoo.png";
import LoginForm from "./components/LoginForm";
import "./styles/style.css";

export default function App() {
  // Local state
  const [greetings, setGreetings] = useState(Countries);
  const [counter, setCounter] = useState(0);

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

  return (
    <div className="App">
      {/* Header */}
      <img className="logo" src={Logo} />
      <h1>Welcome to Kickstart Frontend</h1>

      {/* Counter */}
      <h2>Counter:</h2>
      <p>{counter}</p>
      <button onClick={onExample}>Increase counter</button>

      {/* Fake text */}
      <h2>Some fake text</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        architecto modi magnam et necessitatibus in consequatur consectetur
        ipsum, illo iste eaque vel quis voluptas beatae aliquam minus laborum,
        veritatis sequi!
      </p>

      {/* Cards */}
      <h2>My country cards</h2>
      {Cards}
      <h2>My form</h2>

      {/* Form */}
      <LoginForm />
    </div>
  );
}
