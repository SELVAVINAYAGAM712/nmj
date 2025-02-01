import HomeDashboard from './Components/dashoard/HomeDashboard';

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './Components/widgets/HeaderPage';

import HomeCustom from "./Components/homeCustom/HomeCustom";



const MenuRoutes = ()=>{
    return(
        <>
        

<Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="/widgets" element={<HeaderPage />} />

            {/* <Route path="/homeCustom" element={<HomeCustom />} /> */}
        </Routes>  
        </>
    )
}

export default MenuRoutes;