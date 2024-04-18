import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import SideDashboard from "./components/SideDashboard";
import TransactionRecords from "./components/TransactionRecords";
import Assets from "./components/Assets";
import AssetsandGoals from "./components/AssetsandGoals";

function App({ filter }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideDashboard flag={1} />
      <Table />
      {/* <TransactionRecords filter={filter} /> */}
      {/* <AssetsandGoals /> */}
    </>
  );
}

export default App;
