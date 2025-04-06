import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface DataResponse {
  message: string;
}

function App() {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data: DataResponse) => setData(data.message));
  }, []);

  return (
    <>
      <h1>Backend response: {data}</h1>
    </>
  );
}

export default App;
