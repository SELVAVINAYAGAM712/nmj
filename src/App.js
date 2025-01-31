import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import MenuRoutes from "./MenuRoutes";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <Navbar /> */}
          <MenuRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
