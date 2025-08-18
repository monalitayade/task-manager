
import React, { useState } from 'react';
import SideMenuBar from '../components/SideBarMenu/SideMenuBar';
import RightLayout from '../components/RightLayout';
import AppContent from '../components/AppContent/AppContent';


const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    // <div className="flex flex-column md:flex-row w-full h-screen">
      
    //   <div
    //     className={`fixed top-0 left-0 z-50 h-full bg-white shadow-4 transition-all md:w-3 md:static md:block ${
    //       sidebarVisible ? 'block' : 'hidden'
    //     } md:w-3 w-16rem`}
    //   >
    //     <SideMenuBar onClose={() => setSidebarVisible(false)} />
    //   </div>

    //   {/* Right Layout */}
    //   <div className="flex-1 overflow-auto">
    //     <RightLayout setSidebarVisible={setSidebarVisible}/>
    //   </div>
    // </div>
    <>
      <AppContent />
    </>
  );
};

export default Home;
