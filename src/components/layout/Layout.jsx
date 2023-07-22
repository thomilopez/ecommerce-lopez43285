import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const layout = () => {
    return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
    );
};

export default layout