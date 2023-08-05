import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const layout = () => {
    return (
    <>
        <Navbar/>
        <div style={{display:"flex", flexDirection: "column", minHeight:"100vh", backgroundColor: "lightYellow"}}>
        <Outlet/>

        </div>
        <Footer/>
    </>
    );
};

export default layout