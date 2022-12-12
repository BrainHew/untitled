import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import "./styles/App.css";
import Header from "./components/UI/Header";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
  return (
      <div className="allBlocks">
          <AuthContext.Provider value={{
              isAuth,
              setIsAuth
          }}>
              <BrowserRouter>
                  <Header/>
                  <div className="background" >
                      <AppRouter/>
                  </div>
              </BrowserRouter>
          </AuthContext.Provider>
      </div>
  )
}

export default App;
