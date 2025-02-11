import HomeDashboard from './Components/dashoard/HomeDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './Components/widgets/HeaderPage';
import AboutUs  from './Components/aboutUs-page/AboutUs';
import PageSevice from './Components/pageService-page/PageService';
import BottomContact from './Components/BottomContactAs/BottomContact';


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
                <Route path="BottomContactAs" element={<BottomContact />} />


            </Route>
            </Routes>
        </>
    )
}

export default MenuRoutes;