import { Routes , Route } from "react-router-dom";
import HomeDashboard from './Components/dashoard/HomeDashboard';
import HomeCustom from "./Components/homeCustom/HomeCustom";


const MenuRoutes = ()=>{
    return(
        <>

        <Routes>
            <Route path="/" element={<HomeDashboard />} />
            {/* <Route path="/homeCustom" element={<HomeCustom />} /> */}
        </Routes>
        
        
        </>
    )
}

export default MenuRoutes;