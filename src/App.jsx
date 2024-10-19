import { useState } from "react";
import Home from "./page/Home"
import Documentation from "./page/Docs"

const App = () => {
  // State to store the current route (url path)
  const [route, setRoute] = useState(window.location.pathname);

  // Function to handle navigation
  const navigate = (path) => {
    window.history.pushState({}, "", path); // Change the URL in the browser
    setRoute(path); // Update the state to re-render the component
  };

  // Function to determine what component to render based on the current route
  const renderRoute = () => {
    switch (route) {
      case "/about":
        return <Documentation />;
      case "/docs":
        return <Documentation />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" onClick={() => navigate("/")}>
              Num2Talk
            </a>
          </li>
          <li>
            <a href="/docs" onClick={() => navigate("/docs")}>
            Documentation
            </a>
          </li>
         
        </ul>
      </nav>
      <div>{renderRoute()}</div>
    </div>
  );
};

export default App;
