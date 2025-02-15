import HomeDashboard from './Components/dashoard/HomeDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './Components/widgets/HeaderPage';
import AboutUs  from './Components/aboutUs-page/AboutUs';
import PageSevice from './Components/pageService-page/PageService';
import Footer from './Components/footer/Footer';


const MenuRoutes = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<HomeDashboard />} />
                <Route path="/widgets" element={<HeaderPage />}>
                <Route index element={<AboutUs />} />
                <Route path="about" element={<AboutUs />} />
                <Route index element={<PageSevice />} />
                <Route path="pageService" element={<PageSevice />} />
                <Route path="Footer" element={<Footer />} />


            </Route>
            </Routes>
        </>
    )
}

export default MenuRoutes;