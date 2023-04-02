import { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((result, index) => {
        return (
          <Card
            key={index}
            url={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
};

export default App;
