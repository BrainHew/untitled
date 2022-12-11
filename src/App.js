import React from "react";
import {BrowserRouter} from "react-router-dom";
import "./styles/App.css";
import Header from "./components/UI/Header";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <BrowserRouter>

          <Header/>
          <AppRouter/>
      </BrowserRouter>
  )
}

export default App;
