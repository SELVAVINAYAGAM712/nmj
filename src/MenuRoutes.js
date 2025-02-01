import HomeDashboard from './Components/dashoard/HomeDashboard';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './Components/widgets/HeaderPage';


const MenuRoutes = ()=>{
    return(
        <>
        

<Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/widgets" element={<HeaderPage />} />
        </Routes>
        

        
        
        
        </>
    )
}

export default MenuRoutes;