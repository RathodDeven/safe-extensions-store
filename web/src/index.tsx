import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PluginList from "./routes/plugins/PluginList";
import { RelayPlugin } from "./routes/samples/relay/RelayPlugin";
import Header from "./components/Header";
// import browserroute and routes from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstalledExtensiosn from "./routes/installed/InstalledExtensiosn";
import PluginPage from "./routes/plugin/PluginPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <div className="w-screen h-screen overflow-auto bg-p-bg text-p-text hide-scrollbar">
        <Header />
        <div className="p-16 flex flex-row justify-center w-full">
          <Routes>
            <Route path="/" Component={PluginList} />
            <Route path="/plugin/:pluginAddress" Component={PluginPage} />
            <Route path="/relay/:pluginAddress" Component={RelayPlugin} />
            <Route path="/installed" Component={InstalledExtensiosn} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
