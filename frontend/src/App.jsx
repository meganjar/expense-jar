import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReportingPage from "./pages/ReportingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReceiptsPage from "./pages/ReceiptsPage";
import NavBar from "./Components/NavBar";
import NewReceipt from "./Components/NewReceipt";

function App() {
  // const res = await fetch("http://localhost:8080/");
  // const data = await res.json();
  // console.log(data)

  async function handleSubmit(e) {}

  return (
    <>
        <NavBar />
        <div className="pt-16 md:pt-16 px-8 md:px-16">
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/receipts" element={<ReceiptsPage />} />
          <Route path="/reporting" element={<ReportingPage />} />
        </Routes>
        </div>
    </>
  );
}
export default App;
