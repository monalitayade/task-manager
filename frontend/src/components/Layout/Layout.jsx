import React, {use, useState} from 'react'
import { useLocation } from 'react-router-dom';
import SideMenuBar from '../../components/SideBarMenu/SideMenuBar';
import RightLayout from '../../components/RightLayout';
import Register from '../../pages/Register';
import Login from '../../pages/Login';

const Layout = ({children}) => {
    const location = useLocation();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const hideLayoutRoutes = ['/sign-up', '/sign-in'];
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
    if (shouldHideLayout) {
    // Just render the children without sidebar/topbar
    return <>{children}</>;
  }

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    }
  return (
    <>
    <div className="flex flex-column md:flex-row w-full h-screen">
      
      <div
        className={`fixed top-0 left-0 z-1 h-full bg-white shadow-4 transition-all md:w-3 md:static md:block ${
          sidebarVisible ? 'block' : 'hidden'
        } md:w-3 w-16rem`}
      >
        <SideMenuBar toggleSidebar={toggleSidebar}/>
      </div>

      {/* Right Layout */}
      <div className="flex-1 overflow-auto">
        <RightLayout setSidebarVisible={setSidebarVisible} children={children}/>
      </div>
    </div>
   
     </>
  )
}

export default Layout
