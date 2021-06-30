import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
