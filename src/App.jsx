import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import SideDashboard from "./components/SideDashboard";
import TransactionRecords from "./components/TransactionRecords";
import Assets from "./components/Assets";
import AssetsandGoals from "./components/AssetsandGoals";
import Charts from "./components/Charts";
import Settings from "./components/settings/Settings";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/sidebar/Sidebar";

function App({ filter }) {
  const [count, setCount] = useState(0);
  // localStorage.setItem("dashboard-item", 1);
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Table />;
      break;
    case "/transaction-records":
      component = <TransactionRecords />;
      localStorage.setItem("dashboard-item", 2);
      break;
    case "/assets-and-goals":
      component = <AssetsandGoals />;
      break;
    case "/settings":
      component = <Settings />;
      break;
  }
  return (
    <>
      <Sidebar />
      {/* <SideDashboard flag={0} /> */}
      {component}
      {/* <TransactionRecords filter={filter} /> */}
      {/* <AssetsandGoals /> */}
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
