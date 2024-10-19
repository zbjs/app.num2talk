import { useState } from "react";
import Home from "./page/Home";
import Documentation from "./page/Docs";

const App = () => {
  // State to store the current route (url path)
  const [route, setRoute] = useState("home");

  // Function to handle navigation
  const navigate = (path) => {
    setRoute(path); // Update the state to switch components
  };

  // Function to determine what component to render based on the current route
  const renderRoute = () => {
    switch (route) {
      case "docs":
        return <Documentation />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
         
          
          <li className="nav-item">
            <button className="link-button" onClick={() => navigate("docs")}>Documentation</button>
          </li>
          <li className="nav-item">
            <button className="link-button" onClick={() => navigate("home")}>Num2Talk</button>
          </li>
        </ul>
      </nav>
      <div>{renderRoute()}</div>
    </div>
  );
};

export default App;
