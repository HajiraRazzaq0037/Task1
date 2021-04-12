import React from "react";
import "./tailwind.output.css";
import "./tailwind.css";
import "antd/dist/antd.css";
import Routes from "./authentication/routes";
import ReduxProvider from "./store/ReduxProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
