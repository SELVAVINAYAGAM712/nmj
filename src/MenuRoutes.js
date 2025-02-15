import HomeDashboard from './Components/dashoard/HomeDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs  from './Components/aboutUs-page/AboutUs';
import CustomizedJewl from './Components/customized_jewl/CustomizedJewl';


const MenuRoutes = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<HomeDashboard />} />
                <Route path="/aboutUs-page" element={<AboutUs />} />
                <Route path="/customized_jewl" element={<CustomizedJewl />} />
                
            </Routes>
        </>
    )
}

export default MenuRoutes;
    