import { useState, useRef, useEffect } from "react";
import {Route, Routes} from "react-router-dom"
import "./App.css";
import AnalyticsPage from "./pages/AnalyticsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import receiptsPage from "./pages/ReceiptsPage";


async function App(e) {
  const res = await fetch("http://localhost:8080/");
  const data = await res.json();
  console.log(data)

  
    async function handleSubmit(e) {
      // <-- listen and handle events
      e.preventDefault();
      const todo = {
        text: textRef.current.value,
      };
      fetch("http://localhost:8080/api/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return (
    <>
        <h1>ummm hello</h1>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
  }

export default App;
