import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnalyticsPage from "./pages/AnalyticsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReceiptsPage from "./pages/ReceiptsPage";
import LowerNav from "./Components/Nav";

function App() {
  // const res = await fetch("http://localhost:8080/");
  // const data = await res.json();
  // console.log(data)

  async function handleSubmit(e) {}

  return (
    <>
      <div className="bg-black min-h-screen">
        <LowerNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/receipts" element={<ReceiptsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
export default App;
