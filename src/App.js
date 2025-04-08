import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MenuRoutes from "./MenuRoutes";
import "./styles/main.css";



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
