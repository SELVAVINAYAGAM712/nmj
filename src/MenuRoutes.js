import HomeDashboard from './Components/dashoard/HomeDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs  from './Components/aboutUs-page/AboutUs';
import CustomizedJewl from './Components/customized_jewl/CustomizedJewl';
import ContactUsPage from './Components/contact_us_pages/ContactUsPage';



const MenuRoutes = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<HomeDashboard />} />
                <Route path="/aboutUs-page" element={<AboutUs />} />
                <Route path="/customized_jewl" element={<CustomizedJewl />} />
                <Route path="/contact_us_pages" element={<ContactUsPage />} />
                
            </Routes>
        </>
    )
}

export default MenuRoutes;
    