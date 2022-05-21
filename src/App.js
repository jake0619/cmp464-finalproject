import "./App.css";
import { useEffect, useState } from "react";
import kanyeLogo from "./images/kanyeIcon.png";

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
    </div>
  );
}

export default App;
