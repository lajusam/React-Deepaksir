import { useState } from "react";
import img2 from '../assets/img1.jpeg'

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");
  const [bgColor, setBgColor] = useState("white");
  const [showImage, setShowImage] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const quotes = [
    "Stay hungry, stay foolish.",
    "Practice makes progress.",
    "Code. Sleep. Repeat.",
    "Believe in yourself.",
    "Consistency beats talent."
  ];
  const [quote, setQuote] = useState(quotes[0]);
  const [light, setLight] = useState("red");

  const nextLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h2>1. Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>2. Toggle Button</h2>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "ON" : "OFF"}
      </button>
      <h2>3. Real-time Text Input</h2>
      <input
        type="text"
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>

      <hr />
      <h2>4. Light / Dark Theme</h2>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Switch Theme
      </button>
      <h2>5. Color Picker</h2>
      <input
        type="color"
        onChange={(e) => setBgColor(e.target.value)}
      />
      <div
        style={{
          height: "60px",
          marginTop: "10px",
          backgroundColor: bgColor
        }}
      ></div>


      <h2>6. Show / Hide Image</h2>
      <button onClick={() => setShowImage(!showImage)}>
        {showImage ? "Hide" : "Show"} Image
      </button>
      <br />
      {showImage && (
        <img
          src={img2}
          alt="sample"
         
        />
      )}
      <h2>7. Click Tracker</h2>
      <div
        onClick={() => setClicks(clicks + 1)}
      >
        Click Me
      </div>
      <p>Total clicks: {clicks}</p>

      <h2>8. Password Visibility</h2>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>


      <h2>9. Random Quote Generator</h2>
      <p>"{quote}"</p>
      <button
        onClick={() =>
          setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        }
      >
        New Quote
      </button>

      <hr />

      <h2>10. Traffic Light Simulator</h2>
      <div style={{ width: "60px", margin: "auto" }}>
        <div style={{
          height: "50px",
          backgroundColor: light === "red" ? "red" : "#555",
          marginBottom: "5px"
        }}></div>
        <div style={{
          height: "50px",
          backgroundColor: light === "yellow" ? "yellow" : "#555",
          marginBottom: "5px"
        }}></div>
        <div style={{
          height: "50px",
          backgroundColor: light === "green" ? "green" : "#555"
        }}></div>
      </div>
      <button onClick={nextLight} style={{ marginTop: "10px" }}>
        Change Light
      </button>
    </div>
  );
};

export default App;
