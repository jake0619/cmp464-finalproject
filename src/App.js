import "./App.css";
import { useEffect, useState } from "react";
import kanyeLogo from "./images/kanyeIcon.png";
import { NavLink } from "react-router-dom";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    let response = await fetch("https://api.kanye.rest");
    let result = await response.json();
    console.log("finding a quote!");
    setQuote(result.quote);
  };

  useEffect(() => {
    document.title = "Kanye West Quotes";
    getQuote();
  }, []);

  return (
    <div className="quoteContainer">
      <p>"{quote}"</p>
      <input
        type="image"
        alt="kanye logo"
        src={kanyeLogo}
        onClick={() => getQuote()}
      />
      <nav className="navBar">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to={`/About`}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to={`/Resume`}
        >
          Resume
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to={`/Weather`}
        >
          Weather
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
