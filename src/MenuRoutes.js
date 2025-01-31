import { Routes , Route } from "react-router-dom";
import HomeDashboard from './Components/dashoard/HomeDashboard';


const MenuRoutes = ()=>{
    return(
        <>

        <Routes>
            <Route path="/" element={<HomeDashboard />} />
        </Routes>
        
        
        </>
    )
}

export default MenuRoutes;