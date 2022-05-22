import "./App.css";
import { useEffect, useState } from "react";
import kanyeLogo from "./images/kanyeIcon.png";
import { NavLink, Outlet } from "react-router-dom";

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
      <h6 style={{ margin: 0, fontSize: 9 }}>
        click kanye to generate a new quote!
      </h6>
      <nav className="navBar">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to={`/`}
        >
          Home
        </NavLink>
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
      <Outlet />
    </div>
  );
}

export default App;
