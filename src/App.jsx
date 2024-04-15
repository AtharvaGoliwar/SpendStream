import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import SideDashboard from "./components/SideDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideDashboard />
      <Table />
    </>
  );
}

export default App;
