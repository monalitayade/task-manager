import React from 'react'
import MyToolbar from './MyToolBar'
import { Button } from 'primereact/button';
import AppContent from '../components/AppContent/AppContent';

const RightLayout = ({setSidebarVisible,children}) => {
  return (
    <div className='w-full flex flex-column h-full right-layout'>
        {/* <div className="md:hidden p-2 shadow-2 surface-100">
            <Button
                icon="pi pi-bars"
                className="p-button-text"
                onClick={() => setSidebarVisible(true)}
            />
        </div> */}
        <MyToolbar setSidebarVisible={setSidebarVisible} />
        <div className='flex flex-column flex-1 pr-0 p-3 md:p-4 mt-7'>
            {children}
        </div>
        
        {/* <AppContent /> */}
      {/* <h1>Right Layout</h1> */}
    </div>
  )
}

export default RightLayout
