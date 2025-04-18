import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MenuRoutes from "./MenuRoutes";
import "./styles/main.css";



function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'serif' }}>
        <MenuRoutes />
      </div>
    </Router>
  );
}

export default App;
