
import React, { useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Link } from 'react-router-dom';

export default function MyToolbar({setSidebarVisible}) {
    const op = useRef(null);
    const startContent = (
       <Button
        icon="pi pi-bars"
        className="p-button-text md:hidden flex text-500"
        onClick={() => setSidebarVisible(true)}
    />
    );

    // const centerContent = (
    //     <div className="flex flex-wrap align-items-center gap-3">
    //         <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
    //             <i className="pi pi-home text-2xl"></i>
    //         </button>
    //         <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
    //             <i className="pi pi-user text-2xl"></i>
    //         </button>
    //         <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
    //             <i className="pi pi-search text-2xl"></i>
    //         </button>
    //     </div>
    // );

    const endContent = (
        <div className="w-full flex flex-wrap align-items-center gap-3 ">           
           
            <button className="p-link inline-flex justify-content-center align-items-center text-black h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-search text-xl"></i>
            </button>
            <div className="flex flex-column align-items-center gap-3 relative">
                <button className="p-link inline-flex justify-content-center align-items-center text-black h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200" label="Image" 
                onClick={(e) => op.current.toggle(e)}>
                    <i className="pi pi-user text-xl"></i>
                </button>
                <OverlayPanel ref={op} className='md:right-0 md:w-3 w-7 p-0' >
                   <Link to="/admin-profile" className='w-full flex justify-content-start no-underline text-center text-color-secondary border-grey-500 pb-2  mb-2'>
                        <i className="pi pi-user mr-2"></i>
                        My Profile
                   </Link>
                   <Link to="/add-user" className='w-full flex justify-content-start no-underline text-center text-color-secondary pb-2 mb-2'>
                        <i className="pi pi-plus mr-2"></i>
                        Add User
                   </Link>
                   <Link to="/create-projects" className='w-full flex justify-content-start align-content-center no-underline text-center text-color-secondary pb-2 mb-2'>
                        <i className="pi pi-folder-plus mr-2"></i>
                        Add Project
                   </Link>
                    <Link to="" className='w-full flex justify-content-start align-content-center no-underline text-center text-color-secondary'>
                        <i className="pi pi-sign-out mr-2"></i>
                        Sign Out
                   </Link>
                </OverlayPanel>
            </div>
        </div>
    );

    return (
        <div className="md:w-9 w-full bg-white card p-0 fixed right-0 top-0 md:top-2 md:right-2">
            <Toolbar start={startContent} end={endContent} className="p-2" />
        </div>
    );
}
        