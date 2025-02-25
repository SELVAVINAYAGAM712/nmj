import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MenuRoutes from "./MenuRoutes";

function App() {
  return (
    <Router>
      <div>
        <MenuRoutes />
      </div>
    </Router>
  );
}

export default App;
