import { Routes, Route } from 'react-router-dom'; // ✅ Correct import
import HomeDashboard from './Components/dashoard/HomeDashboard';
import AboutUs from './Components/aboutUs-page/AboutUs';
import CustomizedJewl from './Components/customized_jewl/CustomizedJewl';
import ContactUsPage from './Components/contact_us_pages/ContactUsPage';
import Blog from './Components/blog/Blog';

const MenuRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/aboutUs-page" element={<AboutUs />} />
            <Route path="/customized_jewl" element={<CustomizedJewl />} />
            <Route path="/contact_us_pages" element={<ContactUsPage />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
}

export default MenuRoutes;
